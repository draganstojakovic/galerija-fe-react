import ApiService from "./ApiService";

class GalleryService extends ApiService {
  async getAll() {
    return await this.client.get("/galleries");
  }
}

export const galleryService = new GalleryService();
