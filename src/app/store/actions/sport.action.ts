import { Action } from '@ngrx/store';
import { Sport } from '../model/user';

export const LIST_SPORTS = '[Sports] Fetch sport';
export const ADD_SPORTS = '[Sports] Add sport';
export const UPDATE_SPORTS = '[Sports] Update sport';
export const DELETE_SPORTS = '[Sports] Delete sport';
export const LIST_DATA_SUCCESS = '[Sports] List Success';
export const ADD_SPORTS_SUCCESS = '[Sports] Add sport success';
export const DELETE_SPORTS_SUCCESS = '[Sports] Delete sport success';
export const UPDATE_SPORTS_SUCCESS = '[Sports] Update sport success';

export class ListSports implements Action {
  readonly type = LIST_SPORTS;
  constructor() {}
}

export class ListDataSuccess implements Action {
  readonly type = LIST_DATA_SUCCESS;
  constructor(public payload: Sport[]) {}
}

export class AddSports implements Action {
  readonly type = ADD_SPORTS;
  constructor(public payload: Sport[]) {}
}

export class AddSportsSuccess implements Action {
  readonly type = ADD_SPORTS_SUCCESS;
  constructor(public payload: Sport[]) {}
}

export class UpdateSports implements Action {
  readonly type = UPDATE_SPORTS;
  constructor(public payload: Sport[]) {}
}

export class UpdateSportsSuccess implements Action {
  readonly type = UPDATE_SPORTS_SUCCESS;
  constructor(public payload: Sport[]) {}
}

export class DeleteSports implements Action {
  readonly type = DELETE_SPORTS;
  constructor(public payload: Sport[]) {}
}

export class DeleteSportSuccess implements Action {
  readonly type = DELETE_SPORTS_SUCCESS;
}

export type SportsActions =
| ListSports
| ListDataSuccess
| AddSports
| AddSportsSuccess
| UpdateSports
| UpdateSportsSuccess
| DeleteSports
| DeleteSportSuccess;

