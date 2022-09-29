import { createContext, useReducer, useContext } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });

    const data = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data
    });
  };

  const value = {
    users: state.users,
    loading: state.loading,
    fetchUsers
  };

  return <GithubContext.Provider value={value}>{children}</GithubContext.Provider>;
};

export const useGithub = () => useContext(GithubContext);
