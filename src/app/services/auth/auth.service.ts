// import { handleRequest } from "@/app/lib/utils/handle-request";
import { ApiService } from "../api/api.service";

interface Login {
  email: string;
  password: string;
  success?: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

const mockUser = {
  id: "1",
  email: "user@example.com",
  password: "password",
  role: "user",
};

interface LoginResponse {
  id: string;
  email: string;
  role: string;
}

//mock
const simulateNetworkDelay = () =>
  new Promise((resolve) => setTimeout(resolve, 1000));

class AuthService extends ApiService {
  //   private loginEndpoint = "/auth/login";
  //   private user = "/me";
  //   public async login(requestBody: Partial<Login>): Promise<Login> {
  //     return handleRequest(
  //       this.post<Login, Partial<Login>>(this.loginEndpoint, requestBody)
  //     );
  //   }
  //   public async logout(requestBody: Partial<Login>): Promise<Login> {
  //     return handleRequest(
  //       this.post<Login, Partial<Login>>(this.loginEndpoint, requestBody)
  //     );
  //   }
  //   public async getUser(id: number): Promise<User> {
  //     return handleRequest(this.get<User>(`${this.user}/${id}`));
  //   }
  //   public isAuthenticated = () => {
  //     return !!localStorage.getItem('token');
  //   };

  //MOCK
  public async login(email: string, password: string): Promise<LoginResponse> {
    await simulateNetworkDelay();
    // if (email === "user@example.com" && password === "password") {
    //   return mockUser;
    // } else {
    //   throw new Error("Invalid email or password");
    // }
    if (email === "user@example.com" && password === "password") {
      return { id: "1", email, role: "user" };
    } else if (email === "admin@example.com" && password === "adminpassword") {
      return { id: "2", email, role: "admin" };
    } else {
      throw new Error("Invalid email or password");
    }
  }
  public async logout(): Promise<Login> {
    await simulateNetworkDelay();

    return { email: "", password: "", success: true };
  }
  public async getCurrentUser(): Promise<LoginResponse> {
    await simulateNetworkDelay();
    return mockUser;
  }
  //MOCK
}

export const authService = new AuthService();
