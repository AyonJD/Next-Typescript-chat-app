import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { excludeCurrentUser, loggedInUser } from '../Api/user.api';
import { IUserResponse } from '../Interface/user.interface';

interface ApiContextProps {
  data: {
    token: string;
    _retriveData: () => Promise<void>;
    loggedInUserData: IUserResponse | null;
    excludeCurrentUserData: IUserResponse | null;
  };
}

export const ApiContext = createContext<ApiContextProps>({
  data: {
    token: '',
    _retriveData: () => Promise.resolve(),
    loggedInUserData: null,
    excludeCurrentUserData: null,
  },
});

interface ApiContextProviderProps {
  children: ReactNode;
}

export const ApiContextProvider: React.FC<ApiContextProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState('');
  const [loggedInUserData, setLoggedInUserData] = useState<IUserResponse | null>(null);
  const [excludeCurrentUserData, setExcludeCurrentUserData] = useState<IUserResponse | null>(null);

  const _retriveData = async () => {
    const storedToken = localStorage.getItem('chat_app_token');
    if (storedToken) {
      setToken(storedToken);
      const loggedInUserResult: IUserResponse = await loggedInUser(storedToken);
      setLoggedInUserData(loggedInUserResult);

      if (loggedInUserResult.success) {
        const excludeCurrentUserResult = await excludeCurrentUser(loggedInUserResult.result._id as string);
        setExcludeCurrentUserData(excludeCurrentUserResult);
      }
    }
  };

  useEffect(() => {
    _retriveData();
  }, []);

  const data = {
    token,
    _retriveData,
    loggedInUserData,
    excludeCurrentUserData,
  };

  return (
    <ApiContext.Provider value={{ data }}>
      {children}
    </ApiContext.Provider>
  );
};
