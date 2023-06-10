export interface IUser {
    username: string;
    password: string;
    email: string;
}

export interface ILoginUser {
    [x: string]: any;
    _id?: string;
    username?: string;
    email?: string;
    password: string;
}

export interface IUserResponse {
    success: boolean;
    message: string;
    result: ILoginUser;
}