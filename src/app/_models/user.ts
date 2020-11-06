// user.ts
export interface LoginResponse {
    access_token?: string;
    name: string;
    email: string;
    password: string;
    c_password: string;
    message: string;
}
