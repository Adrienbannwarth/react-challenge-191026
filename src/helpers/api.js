import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.API_URL || 'http://51.15.192.124:8080',
  responseType: 'json',
  xsrfCookieName: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

export const options = {
  interceptors: {
    request: [
      (store, config) => {
        if (store.getState().user.credentials['access-token']) {
          config.headers['Authorization'] = `Bearer ${JSON.parse(store.getState().user.credentials['access-token'])}`;
        } else if (window.localStorage.getItem('user')) {
          config.headers['Authorization'] = `Bearer ${JSON.parse(window.localStorage.getItem('user'))}`;
        }
        return config;
      }
    ],
    response: [
      (store, response) => {
        return response;
      }
    ]
  }
}
