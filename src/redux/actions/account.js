import apiRoutes from '../../helpers/apiRoutes';

export function getAccount(user) {
  return {
    type: 'GET_ACCOUNT',
    payload: {
      request: {
        url: apiRoutes.account(),
        method: 'GET',
      },
    },
  };
}
