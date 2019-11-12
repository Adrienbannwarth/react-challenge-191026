import apiRoutes from '../../helpers/apiRoutes';

export function updateProfile(user) {
  return {
    type: 'PROFILE',
    payload: {
      request: {
        url: apiRoutes.updateProfile(),
        method: 'post',
        data: {
          email: user.email,
          password: user.password,
        },
      },
    },
  };
}
