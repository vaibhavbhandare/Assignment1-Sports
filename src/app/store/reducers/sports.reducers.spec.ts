import { reducer } from './sports.reducer';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, Object.assign({}))).toEqual(
            {
                sport: [],
                message: null,
                success: null,
            }
        );
    });

});
