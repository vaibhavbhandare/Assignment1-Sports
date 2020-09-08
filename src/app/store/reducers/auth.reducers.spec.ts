import { reducer } from './auth.reducers';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, Object.assign({}))).toEqual(
            {
                isAuthenticated: false,
                user: null,
                errorMessage: null,
                sports: [],
                added: null,
                updated: null,
                loaded: null,
                deleted: null
            }
        );
    });

});
