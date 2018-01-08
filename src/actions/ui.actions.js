export const API_ERROR = 'API_ERROR';
export function api_error(error_details) {
  return {
    type: API_ERROR,
    payload: error_details
  }
};
