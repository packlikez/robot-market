import React, {useCallback} from "react";
import {debounce} from "lodash/function";

const useDebounce = (fn, deps = [], delay = 500) => {
    return useCallback(debounce(fn, delay), deps);
};

export default useDebounce;
