import http from "../utils/http";
import { apiCallBegin, apiCallFailed, apiCallSuccess } from "../store/api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegin.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    const response = await http[method](url, data);
    if (response.error) {
      const errorResponse = response.error.response;
      const errorMessage = response.error.message;

      dispatch(apiCallFailed(errorResponse));

      if (onError)
        return dispatch({
          type: onError,
          message: errorMessage,
        });

      // this could return default error action
      return;
    }
    dispatch(apiCallSuccess(response.data));
    return dispatch({ type: onSuccess, payload: response.data, data });
  };

export default api;
