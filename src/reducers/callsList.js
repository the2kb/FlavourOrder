import {methods} from '../actions/callsList';

const defaultState = {
  isFetching: false,
  list : [],
  errors: []
};

const {
  FETCH_CALLS_LIST_START,
  FETCH_CALLS_LIST_SUCCESS,
  FETCH_CALLS_LIST_ERROR,
} = methods;

export default (state = defaultState, action) => {

  switch (action.type) {

    case FETCH_CALLS_LIST_START: {
      return {
        ...defaultState,
        isFetching: true,
      }
    }

    case FETCH_CALLS_LIST_SUCCESS: {
      return {
        isFetching: false,
        list: action.calls,
      }
    }

    case FETCH_CALLS_LIST_ERROR: {
      return {
        isFetching: false,
        errors: []
      }
    }

    default: {
      return state;
    }
  }
};
