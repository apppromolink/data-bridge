import axios from 'axios';

const BASE_URL = 'https://api-web.pelando.com.br';

const API = axios.create({ baseURL: BASE_URL });

export interface IGrabberResponse {
  data: {
    title: string
    brand: string
    images: string[]
    description: string
    sku: number
    store: {
      id: number
      name: string
      url: string
    },
    category: {
      id:19
      name: string
    }
  }
};

export default class PelandoApi {
  static async grabber(url: string): Promise<IGrabberResponse> {
    try {
      const response = await API.get<IGrabberResponse>('/scraper/info', { params: { url } });
      return response.data;
    } catch (error) {
      throw new Error(`Pelando API error: ${error}`);
    }
  }
};
