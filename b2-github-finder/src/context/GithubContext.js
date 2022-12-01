import { createContext, useReducer, useContext } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const value = {
    ...state,
    dispatch
  };

  return <GithubContext.Provider value={value}>{children}</GithubContext.Provider>;
};

export const useGithub = () => useContext(GithubContext);
