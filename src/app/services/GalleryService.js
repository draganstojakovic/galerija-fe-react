import ApiService from "./ApiService";
import { authService } from "./AuthService";

class GalleryService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }
  
  async getAll() {
    return await this.client.get("/galleries");
  }
}

export const galleryService = new GalleryService();
