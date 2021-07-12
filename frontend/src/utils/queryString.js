import qs from "query-string";

const queryString = {
  stringify: (obj) => qs.stringify(obj),
};

export default queryString;
