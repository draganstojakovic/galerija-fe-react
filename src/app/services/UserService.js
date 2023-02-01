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

  async showOnlyUser(id) {
    return await this.client.get(`only-user/${id}`);
  }
}

export const userService = new UserService();
