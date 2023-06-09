import './styles/style.css';

import { addLike, getLikes } from './modules/like.js';
import { fetchAllMovies } from './modules/movieApi.js';
import { countMovies } from './modules/Counters.js';

const renderMovies = (movies, likes) => {
  const moviesContainer = document.querySelector('.movies-container');
  movies.forEach(
    ({
      id, name, image, language, description,
    }, index) => {
      const movieCard = `
        <div class="container" id=${id}>
          <img src=${image.medium}>
          <span>${name}</span>
          <span>Language: ${language}</span>
          <span> Description: ${description}</span>
          <button class="testing">
            <i class="fa-solid fa-heart"></i>
          </button>
          <span class="likes">${likes[index].likes}</span>
          <button id=${id} class="comment">Comments</button>
        </div>`;
      moviesContainer.innerHTML += movieCard;
    },
  );
  document.querySelector('.movies-count').textContent = countMovies();
};

window.onload = async () => {
  const movies = (await fetchAllMovies()).splice(0, 9);
  const likes = await getLikes();
  renderMovies(movies, likes);
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      // Perform the desired action for displaying comments here
      const movieID = btn.getAttribute('id');
      console.log(`Display comments for movie with ID: ${movieID}`);
    });
  });
};

document
  .querySelector('main.movies-container')
  .addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-heart')) {
      // stylings of heart
      event.target.classList.add('color-change');
      event.target.style.color = 'red';
      event.target.style.fontSize = '2rem';
      setTimeout(() => {
        event.target.style.color = 'white';
        event.target.style.fontSize = '1.5rem';
      }, 500);
      const { id } = event.target.parentElement.parentElement;
      addLike(`${id - 1}`);
      const like = event.target.parentElement.nextElementSibling;
      let noLike = event.target.parentElement.nextElementSibling.innerHTML;
      noLike = `${Number(noLike) + 1}`;
      like.innerHTML = noLike;
    }
  });
