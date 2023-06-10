import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface ApiContextProps {
  data: {
    token: string;
    fetchToken: () => Promise<void>;
  };
}

export const ApiContext = createContext<ApiContextProps>({
  data: {
    token: '',
    fetchToken: () => Promise.resolve(),
  },
});

interface ApiContextProviderProps {
  children: ReactNode;
}

export const ApiContextProvider: React.FC<ApiContextProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState('');

  const fetchToken = async () => {
    const storedToken = localStorage.getItem('chat_app_token');
    if (storedToken) {
      setToken(storedToken);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  const data = {
    token,
    fetchToken,
  };

  return (
    <ApiContext.Provider value={{ data }}>
      {children}
    </ApiContext.Provider>
  );
};
