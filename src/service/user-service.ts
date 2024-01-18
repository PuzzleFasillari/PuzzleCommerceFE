import { LoginRequestModel } from '@models/http/request/login-request.model';
import { RegisterRequestModel } from '@models/http/request/register-request.model';
import { LoginResponseModel } from '@models/http/response/login-response.model';
import { RegisterResponseModel } from '@models/http/response/register-response.model';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const UserService = {
  login: async (data: LoginRequestModel) => {
    try {
      const res = await fetch(`${BASE_URL}/account/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        cache: 'no-cache',
      });
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      const result: LoginResponseModel = await res.json();
      return result;
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
  register: async (data: RegisterRequestModel) => {
    try {
      const res = await fetch(`${BASE_URL}/account/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        cache: 'no-cache',
      });
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      const result: RegisterResponseModel = await res.json();
      return;
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
};
