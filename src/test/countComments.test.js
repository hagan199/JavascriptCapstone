/**
 * @jest-environment jsdom
 */

import { getCommentsCount } from '../modules/count.js';

describe('Testing comments counter', () => {
  test('Getting count for comments', () => {
    const comments = [
      {
        comment: 'This is nice',
        username: 'abi',
        creation_date: '2022-11-06',
      },
      {
        comment: 'Lets get together',
        username: 'dele',
        creation_date: '2022-11-07',
      },
      {
        comment: 'Lets get together',
        username: 'Bob',
        creation_date: '2022-11-19',
      },
    ];

    const commentCount = getCommentsCount(comments);
    expect(commentCount).toBe(3);
  });
});

describe('Testing comments counter', () => {
  test('Getting comment count for rocket when no comment is found', () => {
    const data = [];

    const comment = getCommentsCount(data);
    expect(comment).toBe(0);
  });
});
