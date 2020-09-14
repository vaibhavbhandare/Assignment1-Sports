import {
    LIST_SPORTS,
   ADD_SPORTS, UPDATE_SPORTS, DELETE_SPORTS,
   LIST_DATA_SUCCESS, ADD_SPORTS_SUCCESS,
   DELETE_SPORTS_SUCCESS, UPDATE_SPORTS_SUCCESS, ListSports,
   ListDataSuccess,  DeleteSportSuccess,
   AddSportsSuccess, DeleteSports, UpdateSports, UpdateSportsSuccess, AddSports
} from './sport.action';
import { Sport } from '../model/user';

describe('ListSports', () => {
   it('should create an action', () => {
       const action = new ListSports();
       expect(action).toEqual({ type: LIST_SPORTS });
   });
});

describe('DeleteSportSuccess', () => {
   it('should create an action', () => {
       const action = new DeleteSportSuccess();
       expect(action).toEqual({ type: DELETE_SPORTS_SUCCESS });
   });
});

describe('DeleteSportSuccess', () => {
   it('should create an action', () => {
       const payload = [
           {
               id: '1',
               sportsTitle: 'wrestling and martial arts',
               description: 'is an ancient martial arts style of fighting',
               category: 'Dual Sports'
           },
       ];
       const action = new DeleteSportSuccess();

       expect({ ...action }).toEqual({
           type: DELETE_SPORTS_SUCCESS
       });
   });
});

describe('ListDataSuccess', () => {
   it('should create an action', () => {
       const payload = [
           {
               id: '1',
               sportsTitle: 'wrestling and martial arts',
               description: 'is an ancient martial arts style of fighting',
               category: 'Dual Sports'
           },
       ];
       const action = new ListDataSuccess(payload);

       expect({ ...action }).toEqual({
           type: LIST_DATA_SUCCESS,
           payload,
       });
   });
});

describe('AddSports', () => {
   it('should create an action', () => {
       const payload: Sport[] = [
           {
               id: '1',
               sportsTitle: 'wrestling and martial arts',
               description: 'is an ancient martial arts style of fighting',
               category: 'Dual Sports'
           },
       ];
       const action = new AddSports(payload);

       expect({ ...action }).toEqual({
           type: ADD_SPORTS,
           payload
       });
   });
});

describe('AddSportsSuccess', () => {
   it('should create an action', () => {
       const payload: Sport[] = [
           {
               id: '1',
               sportsTitle: 'wrestling and martial arts',
               description: 'is an ancient martial arts style of fighting',
               category: 'Dual Sports'
           },
       ];
       const action = new AddSportsSuccess(payload);

       expect({ ...action }).toEqual({
           type: ADD_SPORTS_SUCCESS,
           payload
       });
   });
});

describe('DeleteSports', () => {
   it('should create an action', () => {
       const payload: Sport[] = [
           {
               id: '1',
               sportsTitle: 'wrestling and martial arts',
               description: 'is an ancient martial arts style of fighting',
               category: 'Dual Sports'
           },
       ];
       const action = new DeleteSports(payload);

       expect({ ...action }).toEqual({
           type: DELETE_SPORTS,
           payload
       });
   });
});

describe('UpdateSports', () => {
   it('should create an action', () => {
       const payload: Sport[] = [
           {
               id: '1',
               sportsTitle: 'wrestling and martial arts',
               description: 'is an ancient martial arts style of fighting',
               category: 'Dual Sports'
           },
       ];
       const action = new UpdateSports(payload);

       expect({ ...action }).toEqual({
           type: UPDATE_SPORTS,
           payload
       });
   });
});

describe('UpdateSportsSuccess', () => {
   it('should create an action', () => {
       const payload: Sport[] = [
           {
               id: '1',
               sportsTitle: 'wrestling and martial arts',
               description: 'is an ancient martial arts style of fighting',
               category: 'Dual Sports'
           },
       ];
       const action = new UpdateSportsSuccess(payload);

       expect({ ...action }).toEqual({
           type: UPDATE_SPORTS_SUCCESS,
           payload
       });
   });
});
