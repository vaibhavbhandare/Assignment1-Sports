
import { AuthActionTypes, LogInSuccess, LogInFailure, SignUp,
       SignUpSuccess, SignUpFailure, LogOut } from './auth.action';

describe('LogOut', () => {
    it('should create an action', () => {
        const action = new LogOut();
        expect(action).toEqual({ type: AuthActionTypes.LOGOUT });
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
