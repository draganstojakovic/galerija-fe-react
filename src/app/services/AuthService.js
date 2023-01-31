import ApiService from "./ApiService";

class AuthService extends ApiService {
  async login(data) {
    const response = await this.client.post("/auth/login", data);
    this.setLoginTokenAndredirect(response);

    return response;
  }

  async logout() {
    await this.client.post("/auth/logout", {}, { headers: this.getHeaders() });
    window.localStorage.removeItem("loginToken");
    window.location.replace("/login");
  }

  async register(data) {
    const response = await this.client.post("/auth/register", data);
    this.setLoginTokenAndredirect(response);

    return response;
  }

  async me() {
    const response = await this.client.post(
      "/auth/me",
      {},
      {
        headers: this.getHeaders(),
      }
    );

    return response;
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${window.localStorage.getItem("loginToken")}`,
    };
  }

  setLoginTokenAndredirect(response) {
    window.localStorage.setItem("loginToken", response.data.access_token);
    window.location.replace("/");
  }
}

export const authService = new AuthService();