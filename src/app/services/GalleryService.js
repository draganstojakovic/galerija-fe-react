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

  async getUserGalleries(id) {
    return await this.client.get(`/userGalleries/${id}`);
  }

  async getAuthUserGalleries(id) {
    return await this.client.get(`/userGalleries/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }

  async loadOneMoreUserGalleryPage(id, page) {
    return await this.client.get(`/user/${id}/userGalleries?page=${page}`, {
      headers: this.authService.getHeaders(),
    });
  }

  async fetchSearchedTerm(term) {
    return await this.client.get(`search/${term}/galleries`, {
      headers: this.authService.getHeaders(),
    });
  }

  async loadOneMorePageOfSearchedTerm(term, page) {
    return await this.client.get(`search/${term}/galleries?page=${page}`, {
      headers: this.authService.getHeaders(),
    });
  }

  async fetchSearchedTermUser(term, userId) {
    return await this.client.get(
      `userGalleriesSearch?term=${term}&user_id=${userId}`,
      {
        headers: this.authService.getHeaders(),
      }
    );
  }

  async loadOneMorePageOfTermUser(term, userId, page) {
    return await this.client.get(
      `userGalleriesSearch?term=${term}&user_id=${userId}&page=${page}`,
      {
        headers: this.authService.getHeaders(),
      }
    );
  }

  async show(id) {
    return await this.client.get(`/galleries/${id}`);
  }

  async add(gallery) {
    return await this.client.post(`/galleries`, gallery, {
      headers: this.authService.getHeaders(),
    });
  }

  async delete(id) {
    return await this.client.delete(`/galleries/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }

  async update(id, gallery) {
    return await this.client.put(`/galleries/${id}`, gallery, {
      headers: this.authService.getHeaders(),
    });
  }
}

export const galleryService = new GalleryService();
