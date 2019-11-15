import apiRoutes from '../../helpers/apiRoutes';

export function getStudents() {
  return {
    type: 'GET_STUDENTS',
    payload: {
      request: {
        url: apiRoutes.student(),
        method: 'GET',
      },
    },
  };
}
