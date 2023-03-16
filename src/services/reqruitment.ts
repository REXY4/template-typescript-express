import axios from 'axios';
import logger from '../logger/logger';

interface Option {
  description?: string;
  location?: string;
  page?: string;
  full_time?: string;
}

export class Recruitment {
  private apiUrl = process.env.API_URL;
  private apiDetailUrl = process.env.API_URL_DETAIL;
  async getAll(option: Option) {
    const { description, location, page, full_time } = option;
    const params = new URLSearchParams();
    if (description) params.append('description', description);
    if (location) params.append('location', location);
    if (page) params.append('page', String(page));
    if (full_time) params.append('full_time', String(full_time));
    const response = await axios.get(`${this.apiUrl}?${params}`);
    return response.data;
  };

  async getByOne(id:string) {
    const response = await axios.get(`${this.apiDetailUrl}/${id}`);
    return response.data
  }
}
