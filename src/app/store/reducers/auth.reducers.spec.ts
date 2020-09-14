import { reducer, State } from './auth.reducers';
import { LogIn, LogInFailure, LogInSuccess,
         SignUpFailure, SignUpSuccess, LogOut } from '../actions/auth.action';
import { User, Sport } from '../model/user';

const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null,
  };
const dummyUser: User = {
    username: 'test',
    password: 'test123',
  };
const validatedUser: User = {
    username: 'test',
    password: 'test123',
  };
const invalidUser: User = {
    username: 'aa@zz.com',
    password: 'test1233',
  };

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, Object.assign({}))).toEqual(
            {
                isAuthenticated: false,
                user: null,
                errorMessage: null,
            }
        );
    });

});

describe('LogIn', () => {
    it('should return the user post verifying the user credentials', () => {
      const loginAction = new LogIn(dummyUser);
      const passedState: State = {
        isAuthenticated: true,
        user: dummyUser,
        errorMessage: null,
      };
      expect(reducer(passedState, loginAction)).toEqual(passedState);
    });
  });

describe('LogInSuccess', () => {
    it('should return the validated user after login successful', () => {
      const loginAction = new LogInSuccess(dummyUser);
      const passedState: State = {
        isAuthenticated: true,
        user: validatedUser,
        errorMessage: null,
      };
      expect(reducer(passedState, loginAction)).toEqual(passedState);
    });
  });
