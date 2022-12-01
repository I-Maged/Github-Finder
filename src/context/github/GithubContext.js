import { createContext, useState } from 'react';
import env from 'react-dotenv';

const GithubContext = createContext();
const GITHUB_URL = env.GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const [users, SetUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`);

    const data = await response.json();

    SetUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
