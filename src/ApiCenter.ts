import Axios, { AxiosResponse } from 'axios';


export const baseUrl = 'https://spect8-streams-backend.dev.vaudience.net/api/';

export interface AuthErrorResponse {
  code: number;
  message: string;
}

export interface AuthOkResponse {
  token: string;
}

export interface UserLogin{
    user: string;
    password: string;
}

export async function apiLogin(username: string, password: string) {
  const response: AxiosResponse<AuthOkResponse> = await Axios.post(baseUrl + 'auth/signin', {
    "loginId" : username,
    "password" : password
  });
  return response.data;
}