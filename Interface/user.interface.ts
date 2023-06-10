export interface IUser {
    username: string;
    password: string;
    email: string;
}

export interface ILoginUser {
    username?: string;
    email?: string;
    password: string;
}