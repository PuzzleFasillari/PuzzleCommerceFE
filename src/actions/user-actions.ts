'use server';

import { LoginRequestModel } from '@models/http/request/login-request.model';
import { RegisterRequestModel } from '@models/http/request/register-request.model';
import { UserService } from '@service/user-service';
import { removeUser, setUser } from '@utils/auth';

export const loginAction = async (loginRequestModel: LoginRequestModel) => {
  try {
    const result = await UserService.login(loginRequestModel);
    await setUser(result.access_token);
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const registerAction = async (registerRequestModel: RegisterRequestModel) => {
  try {
    await UserService.register(registerRequestModel);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
export const logoutAction = async () => {
  await removeUser();
};
