export const API_ERROR = 'API_ERROR';
export function apiError(error_details) {
  return {
    type: API_ERROR,
    payload: error_details
  }
};

export const DISMISS_ERROR = 'DISMISS_ERROR';
export function dismissError(error_details) {
  return {
    type: DISMISS_ERROR
  }
};
