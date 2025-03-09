import axiosInstance from "@/app/lib/axios/axiosInstance";
import { handleError } from "@/app/lib/utils/error-handler";

export class ApiService {
  protected async get<T>(url: string): Promise<T> {
    try {
      const response = await axiosInstance.get<T>(url);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  protected async post<T, D>(url: string, data: D): Promise<T> {
    try {
      const response = await axiosInstance.post<T>(url, data);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  protected async put<T, D>(url: string, data: D): Promise<T> {
    try {
      const response = await axiosInstance.put<T>(url, data);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }

  protected async delete<T>(url: string): Promise<T> {
    try {
      const response = await axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  }
}

// Export singleton instance
export const apiServiceInstance = new ApiService();
