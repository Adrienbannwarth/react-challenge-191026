import apiRoutes from '../../helpers/apiRoutes';

export function signIn(user) {
  return {
    type: 'SIGN_IN',
    payload: {
      request: {
        url: apiRoutes.signIn(),
        method: 'post',
        data: {
          email: user.email,
          password: user.password,
        },
      },
    },
  };
}
