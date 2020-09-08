import {
    AuthActionTypes, LIST_SPORTS,
    ADD_SPORTS, UPDATE_SPORTS, DELETE_SPORTS,
    LIST_DATA_SUCCESS, ADD_SPORTS_SUCCESS,
    DELETE_SPORTS_SUCCESS, UPDATE_SPORTS_SUCCESS, ListSports,
    ListDataSuccess, LogOut, DeleteSportSuccess, LogInSuccess,
    LogInFailure, SignUp, SignUpSuccess, SignUpFailure,
    AddSportsSuccess, DeleteSports, UpdateSports, UpdateSportsSuccess, AddSports
} from './auth.action';
import { Sport } from '../model/user';

describe('ListSports', () => {
    it('should create an action', () => {
        const action = new ListSports();
        expect(action).toEqual({ type: LIST_SPORTS });
    });
});

describe('LogOut', () => {
    it('should create an action', () => {
        const action = new LogOut();
        expect(action).toEqual({ type: AuthActionTypes.LOGOUT });
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

describe('LogInSuccess', () => {
    it('should create an action', () => {
        const payload = [
            {
                username: 'tavisca',
                password: 'tavisca',
            },
        ];
        const action = new LogInSuccess(payload);

        expect({ ...action }).toEqual({
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload,
        });
    });
});

describe('LogInFailure', () => {
    it('should create an action', () => {
        const payload = [
            {
                username: 'tavisca',
                password: 'tavisca',
            },
        ];
        const action = new LogInFailure(payload);

        expect({ ...action }).toEqual({
            type: AuthActionTypes.LOGIN_FAILURE,
            payload,
        });
    });
});

describe('SignUp', () => {
    it('should create an action', () => {
        const payload = [
            {
                username: 'tavisca',
                password: 'tavisca',
            },
        ];
        const action = new SignUp(payload);

        expect({ ...action }).toEqual({
            type: AuthActionTypes.SIGNUP,
            payload,
        });
    });
});

describe('SignUpSuccess', () => {
    it('should create an action', () => {
        const payload = [
            {
                username: 'tavisca',
                password: 'tavisca',
            },
        ];
        const action = new SignUpSuccess(payload);

        expect({ ...action }).toEqual({
            type: AuthActionTypes.SIGNUP_SUCCESS,
            payload,
        });
    });
});

describe('SignUpFailure', () => {
    it('should create an action', () => {
        const payload = [
            {
                username: 'tavisca',
                password: 'tavisca',
            },
        ];
        const action = new SignUpFailure(payload);

        expect({ ...action }).toEqual({
            type: AuthActionTypes.SIGNUP_FAILURE,
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
