interface Object {
  [props:string] : any;
}

const sql = <Object>{
  type: process.env.SQL_DIALECT,
  host: process.env.SQL_HOST,
  port: Number(process.env.SQL_PORT),
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DBNAME,
}

export default sql;
