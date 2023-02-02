import ApiService from "./ApiService";
import { authService } from "./AuthService";

class CommentService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  async showCommentsByGalleyId(id) {
    return await this.client.get(`/commentsOnAGallery/${id}`);
  }

  async add(id, comment) {
    return await this.client.post(`/comments/${id}`, comment, {
      headers: this.authService.getHeaders(),
    });
  }

  async delete(id) {
    return await this.client.delete(`/comments/${id}`, {
      headers: this.authService.getHeaders(),
    });
  }
}

export const commentService = new CommentService();
