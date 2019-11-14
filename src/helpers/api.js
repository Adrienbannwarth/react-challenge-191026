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
        if (
          store.getState().user.credentials['access-token'] &&
          store.getState().user.credentials.expiry >= Math.floor(Date.now()/1000)
        ) {
          config.headers['access-token'] = store.getState().user.credentials['access-token'];
          config.headers.client = store.getState().user.credentials.client;
          config.headers.uid = store.getState().user.credentials.uid;
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
