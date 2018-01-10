export const API_ERROR = 'API_ERROR';
export function apiError(details) {
  return {
    type: API_ERROR,
    payload: details,
  };
}

export const DISMISS_ERROR = 'DISMISS_ERROR';
export function dismissError() {
  return {
    type: DISMISS_ERROR,
  };
}
