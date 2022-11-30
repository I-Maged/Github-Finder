import { useState, useEffect } from 'react';
import Spinner from '../layout/assets/Spinner';
import env from 'react-dotenv';

function UserResults() {
  const [users, SetUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${env.GITHUB_URL}/users`);

    const data = await response.json();

    console.log(data);
    SetUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <div key={user.id}>{user.login}</div>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
