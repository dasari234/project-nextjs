import { handleRequest } from "@/app/lib/utils/handle-request";
import { ApiService } from "../api/api.service";

export interface User {
  id: number;
  name: string;
  email: string;
}

class UserService extends ApiService {
  private readonly endpoint  = "/users";

  public getUsers(): Promise<User[]> {
    return handleRequest(this.get<User[]>(this.endpoint));
  }

  public async getUserById(id: number): Promise<User> {
    return handleRequest(this.get<User>(`${this.endpoint}/${id}`));
  }

  public async createUser(requestBody: Partial<User>): Promise<User> {
    return handleRequest(this.post<User, Partial<User>>(this.endpoint, requestBody));
  }

  public async updateUser(id: number, requestBody: Partial<User>): Promise<User> {
    return handleRequest(this.put<User, Partial<User>>(`${this.endpoint}/${id}`, requestBody));
  }

  public async deleteUser(id: number): Promise<{ message: string }> {
    return handleRequest(this.delete<{ message: string }>(`${this.endpoint}/${id}`));
  }
}

export const userService = new UserService();
