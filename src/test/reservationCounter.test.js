/**
 * @jest-environment jsdom
 */

import getReservationCount from '../modules/count.js';

describe('Testing reservation counter', () => {
  test('Getting count for reservationss', () => {
    const data = [
      {
        username: 'Bob',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },
      {
        username: 'becky',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },
      {
        username: 'marley',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },
      {
        username: 'Bisi',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },
      {
        username: 'Bludidi',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },
    ];
    const reservations = getReservationCount(data);
    expect(reservations).toBe(5);
  });
});
describe('Testing reservations counter', () => {
  test('Getting reservations count for rocket when no reservation is found', () => {
    const data = [];

    const reservation = getReservationCount(data);
    expect(reservation).toBe(0);
  });
});
