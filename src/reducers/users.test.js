import users from './users';
import * as types from '../constants/ActionTypes';

describe('Users reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).toEqual([]);
  });

  it('should handle ADD_USER and store every user', () => {
    expect(
      users([], {
        type: types.ADD_USER,
        name: 'Tirion',
      }),
    ).toEqual([
      {
        name: 'Tirion',
      },
    ]);

    expect(
      users(
        [
          {
            name: 'Mark',
          },
        ],
        {
          type: types.ADD_USER,
          name: 'Tirion',
        },
      ),
    ).toEqual([
      {
        name: 'Mark',
      },
      {
        name: 'Tirion',
      },
    ]);
  });
});