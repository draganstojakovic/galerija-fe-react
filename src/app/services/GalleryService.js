import ApiService from "./ApiService";
import { authService } from "./AuthService";

class GalleryService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  async getFirstPage() {
    return await this.client.get("/galleries?page=1");
  }

  async loadOneMorePage(page) {
    return await this.client.get(`/galleries?page=${page}`);
  }

  async show(id) {
    return await this.client.get(`/galleries/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }

  async add(id, gallery) {
    await this.client.post(`/galleries/${id}`, gallery, {
      headers: this.authService.getHeaders(),
    });
  }
}

export const galleryService = new GalleryService();
