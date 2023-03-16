import { repo } from '../sql/dataset';
import { User } from '../entities/user';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { validate } from 'class-validator';
import { ErrorException } from '../exceptions/error-exception';
import { ErrorCode } from '../exceptions/error-code';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserService {
  async create(data:any) {
    const repositories =  repo.getRepository(User)
    const dto = new CreateUserDto();
    dto.name = data.name;
    dto.email = data.email;
    dto.password = data.password;
    const findUser = await repositories.findOneBy({ email : data.email })
    if (findUser) {
      throw new ErrorException(ErrorCode.Validation, 'email & password already exsit')
    }
    const errors = await validate(dto);
    if (errors.length) {
      throw new ErrorException(ErrorCode.Validation, 'error validation')
    }
    const hash = await bcrypt.hash(data.password, 10);
    const create = await repositories.create({
      name : dto.name,
      email : dto.email,
      password : hash,
    });
    const save = await repositories.save(create)
    return save
  }

  async getOneBy(option : any) {
    const repositories = repo.getRepository(User);
    const dto = new LoginUserDto();
    dto.email = option.email;
    dto.password = option.password;
    const errors = await validate(dto);
    if (errors.length) {
      throw new ErrorException(ErrorCode.Validation, 'error validation')
    }
    const findUser = await repositories.findOneBy({ email : option.email });
    if (!findUser) {
      throw new ErrorException(ErrorCode.NotFound, 'User not registered')
    }
    const isValidPassword = await bcrypt.compare(option.password, findUser.password)
    if (!isValidPassword) {
      throw new ErrorException(ErrorCode.Validation, 'error validation')
    }
    const token = jwt.sign({  id: findUser.id }, process.env.SECRET_KEY);
    return {
      token,
    }
  }

  async checkUser(option:any) {
    const repositories = repo.getRepository(User);
    const findUser = await repositories.findOneBy(option);
    return {
      name : findUser.name,
      email : findUser.email,
    }
  }
}
