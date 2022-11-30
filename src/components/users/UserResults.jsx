import { useState, useEffect } from 'react';
import env from 'react-dotenv';

function UserResults() {
  const [users, SetUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${env.GITHUB_URL}/users`, {
      headers: { Authorization: `token ${env.GITHUB_TOKEN}` },
    });

    const data = await response.json();

    SetUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <div>{user.login}</div>
        ))}
      </div>
    );
  } else {
    return <h3>Loading</h3>;
  }
}

export default UserResults;
