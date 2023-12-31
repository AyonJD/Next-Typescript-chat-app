import axios, { AxiosResponse } from 'axios';
import { ILoginUser, IUser, IUserResponse } from "../Interface/user.interface";

export const createUser = async (userData: IUser): Promise<string> => {
    try {
      const response: AxiosResponse = await axios.post(
        'http://localhost:8000/api/v1/auth/user/signup',
        userData
      );
  
      if (response.data) {
        const token: string = response.data.token;
        localStorage.setItem('chat_app_token', token);
        return token;
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        // Handle Axios network error
        console.log('Network Error:', error.message);
        // Return or throw an appropriate value/error based on your requirements
      } else {
        // Handle other errors
        console.log('Unexpected Error:', error);
        // Return or throw an appropriate value/error based on your requirements
      }
    }
  
    throw new Error('Unexpected error occurred'); // or return an appropriate value based on your requirements
};
  
export const loginUser = async (userData: ILoginUser): Promise<string> => {
    try {
        const response: AxiosResponse = await axios.post(
            'http://localhost:8000/api/v1/auth/user/login',
            userData
        );
        const token: string = response.data.token;
        localStorage.setItem('chat_app_token', token);
        return token;
    } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
            // Handle Axios network error
            console.log('Network Error:', error.message);
            // Return or throw an appropriate value/error based on your requirements
        } else {
            // Handle other errors
            console.log('Unexpected Error:', error);
            // Return or throw an appropriate value/error based on your requirements
        }
    }
    throw new Error('Unexpected error occurred'); // or return an appropriate value based on your requirements
};
  
export const excludeCurrentUser = async (userId: string) => { 
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/auth/user/exclude/${userId}`);
        return response.data;
    }catch(error){
        console.log(error);
        if (axios.isAxiosError(error)) {
            // Handle Axios network error
            console.log('Network Error:', error.message);
            // Return or throw an appropriate value/error based on your requirements
        } else {
            // Handle other errors
            console.log('Unexpected Error:', error);
            // Return or throw an appropriate value/error based on your requirements
        }
    }
}

export const loggedInUser = async (token: string): Promise<IUserResponse> => { 
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8000/api/v1/auth/user/loggedInUser',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        // Handle Axios network error
        console.log('Network Error:', error.message);
        // Return or throw an appropriate value/error based on your requirements
        return Promise.reject(error); // or throw error;
      } else {
        // Handle other errors
        console.log('Unexpected Error:', error);
        // Return or throw an appropriate value/error based on your requirements
        return Promise.reject(error); // or throw error;
      }
    }
  };
  
  

export const UserApi = {
    createUser,
    loginUser
};
