import ApiService from "./ApiService";
import { authService } from "./AuthService";

class UserService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  async show(id) {
    return await this.client.get(`/users/${id}`);
  }
}

export const userService = new UserService();