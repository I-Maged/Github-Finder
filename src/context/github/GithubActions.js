import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
});

//Fetch All Users
export const searchUsers = async (text) => {
  const response = await github.get(`/search/users?q=${text}`);

  return response.data.items;
};

//Get user data and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
