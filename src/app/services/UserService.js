import ApiService from "./ApiService";
import { authService } from "./AuthService";
import axios from "axios";

class UserService extends ApiService {
  constructor() {
    super();
    this.authService = authService;
  }

  async show(id) {
    // return await this.client.get(`/users/${id}`);
    return await axios.get(`http://localhost:8000/api/users/${id}`)
  }
}

export const userService = new UserService();