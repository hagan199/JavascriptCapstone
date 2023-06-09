/**
 * @jest-environment jsdom
 */

import { getLaunchesCount } from '../modules/count.js';

describe('Testing items counter', () => {
  test('Getting item count for list', () => {
    const data = [
      {
        id: '1',
        lsp_name: 'Launch Service Provider 1',
        mission_type: 'mars',
        name: 'Falcon 9 Block 5 | KPLO (Korean Pathfinder Lunar Orbiter)',
        pad: 'pad1',
        location: 'location1',
        image: 'image1',
      },
      {
        id: '2',
        lsp_name: 'Launch Service Provider 2',
        mission_type: 'mars',
        name: 'Falcon 9 Block 5 | KPLO (Korean Pathfinder Lunar Orbiter)',
        pad: 'pad2',
        location: 'location2',
        image: 'image2',
      },
      {
        id: '3',
        lsp_name: 'Launch Service Provider 1',
        mission_type: 'mars',
        name: 'Falcon 9 Block 5 | KPLO (Korean Pathfinder Lunar Orbiter)',
        pad: 'pad1',
        location: 'location1',
        image: 'image1',
      },
      {
        id: '4',
        lsp_name: 'Launch Service Provider 1',
        mission_type: 'mars',
        name: 'Falcon 9 Block 5 | KPLO (Korean Pathfinder Lunar Orbiter)',
        pad: 'pad1',
        location: 'location1',
        image: 'image1',
      },
    ];

    const launches = getLaunchesCount(data);
    expect(launches).toBe(4);
    expect(launches).not.toBe(0);
  });
});

describe('Testing items counter', () => {
  test('Getting item count for list when no item is found', () => {
    const data = [];

    const launches = getLaunchesCount(data);
    expect(launches).toBe(0);
  });
});
