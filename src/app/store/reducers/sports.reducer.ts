import { User, Sport } from '../model/user';
import * as SportsActions from '../actions/sport.action';
import {
  LIST_SPORTS, ADD_SPORTS,
  UPDATE_SPORTS,
  DELETE_SPORTS,
  LIST_DATA_SUCCESS,
  ADD_SPORTS_SUCCESS,
  DELETE_SPORTS_SUCCESS,
  UPDATE_SPORTS_SUCCESS,
} from '../actions/sport.action';

export interface State {
    sport: any;
    success: boolean | null;
    message: string | null;
}

export const initialState: State = {
    sport: [],
    message: null,
    success: null,
  };

export function reducer(state = initialState, action: SportsActions.SportsActions): State {
  switch (action.type) {
    case ADD_SPORTS: {
        return {
          ...state
        };
    }
    case LIST_SPORTS: {
      return {
        ...state
      };
    }
    case DELETE_SPORTS: {
      return {
        ...state
      };
    }
    case UPDATE_SPORTS: {
      return {
        ...state,
      };
    }
    case LIST_DATA_SUCCESS: {
      return {
        ...state,
        sport: [...action.payload],
        message: null,
      };
    }
    case ADD_SPORTS_SUCCESS: {
        return {
            ...state,
            sport: [ ...state.sport, action.payload],
            message: 'The sport is added successfully!',
            success: true,
        };
    }
    case UPDATE_SPORTS_SUCCESS: {
      return {
        ...state,
        message: 'The Sport is updated successfully!',
        success: true,
      };
    }
    case DELETE_SPORTS_SUCCESS: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}
