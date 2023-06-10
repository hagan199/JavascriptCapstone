import { countMovies } from './Counters.js';

document.body.innerHTML = `
  <div class='container'>
    movie info
  </div>
  <div class='container'>
    movie info
  </div>
  <div class='container'>
    movie info
  </div>
  <div class='container'>
    movie info
  </div>
  <div class='container'>
    movie info
  </div>
  <div class='container'>
    movie info
  </div>
  <div class='container'>
    movie info
  </div>
  <div class='container'>
    movie info
  </div>
  <p class="coment-item" id="count">2023-05-25 Paul: This is Paul Comment</p>
  <p class="coment-item" id="count">2023-05-25 Paul: This is Paul Comment</p>
  <p class="coment-item" id="count">2023-05-25 Jasmin: I love these movie</p>
  <p class="coment-item" id="count">2023-05-25 test: testing</p>
  <p class="coment-item" id="count">2023-05-26 Tumaini: Good movie</p>
  <p class="coment-item" id="count">2023-05-26 Tumaini: Good movie</p>
  <p class="coment-item" id="count">2023-05-26 abel: komachua</p>
  <p class="coment-item" id="count">2023-05-26 Mia: update</p>
  <p class="coment-item" id="count">2023-05-25 Paul: This is Paul Comment</p>
  <p class="coment-item" id="count">2023-05-25 Paul: This is Paul Comment</p>
  <p class="coment-item" id="count">2023-05-25 Jasmin: I love these movie</p>
  <p class="coment-item" id="count">2023-05-25 test: testing</p>
  <p class="coment-item" id="count">2023-05-26 Tumaini: Good movie</p>
  <p class="coment-item" id="count">2023-05-26 Tumaini: Good movie</p>
  <p class="coment-item" id="count">2023-05-26 abel: komachua</p>
  <p class="coment-item" id="count">2023-05-26 Mia: update</p>
`;

describe('Counter Test', () => {
  test('When movie cards are rendered to the DOM, the count function should return the exact number of the div elements', () => {
    const count = countMovies();
    expect(count).toBe(8);
  });
});
