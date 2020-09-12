import * as auth from './reducers/auth.reducers';
import * as sport from './reducers/sports.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
  authState: auth.State;
  sport: sport.State;
}

export const reducers = {
    auth: auth.reducer,
    sport: sport.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectSportState = createFeatureSelector<AppState>('sport');

// export default class SportState {
//   Sport: Array<Sport>;
// }

// export const initializeState = (): SportState => {
//   return { Sport: Array<Sport>() };
// };
