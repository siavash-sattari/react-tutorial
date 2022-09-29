import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGithub } from '../context/GithubContext';

function User() {
  const params = useParams();
  const { getUser, user } = useGithub();
  
  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
}

export default User;
