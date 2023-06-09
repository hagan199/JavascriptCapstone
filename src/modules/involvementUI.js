import InvolvementService from './InvolvementService.js';
import Comment from './comment.js';
import Reserve from './reserve.js';
import getReservationCount, { getCommentsCount } from './count.js';

const getDetails = document.querySelector('.commentList');
const hiddenLaunchId = document.getElementById('launch-id');

const txtname = document.getElementById('txt-visitor');
const txtcomment = document.getElementById('txt-comment');
const btnSaveComment = document.getElementById('btn-save-comment');
const commentsCount = document.querySelector('.comments-count');
const getDetails1 = document.querySelector('.reserveList');
const hiddenLaunchId1 = document.getElementById('ilaunch-id');
const reserveCount = document.querySelector('.reserve-count');
const username = document.getElementById('username');
const startDate = document.getElementById('start_date');
const endDate = document.getElementById('end_date');
const btnSaveReserve = document.getElementById('btn-save-reserve');

export default class InvolvementUI {
  static renderComments = async (launchId) => {
    document.getElementById('reserve').style.display = 'none';
    document.getElementById('comment').style.display = 'block';
    hiddenLaunchId.value = launchId;
    getDetails.innerHTML = ' ';
    await InvolvementService.getComments(launchId).then((comments) => {
      commentsCount.textContent = getCommentsCount(comments);
      comments.forEach((comment) => {
        const li = document.createElement('li');
        li.innerText = `${comment.creation_date}: ${comment.username}: ${comment.comment}`;
        getDetails.append(li);
      });
    });
  }

  static renderReserves = async (launchId) => {
    document.getElementById('comment').style.display = 'none';
    document.getElementById('reserve').style.display = 'block';
    hiddenLaunchId1.value = launchId;
    getDetails1.innerHTML = ' ';
    await InvolvementService.getReservations(launchId).then((reserves) => {
      reserveCount.textContent = getReservationCount(reserves);
      reserves.forEach((comment) => {
        const li = document.createElement('li');
        li.innerText = `${comment.date_start} - ${comment.date_end} by ${comment.username} `;
        getDetails1.append(li);
      });
    });
  }

  static clearComments = () => {
    commentsCount.innerText = 0;
    txtname.value = '';
    txtcomment.value = '';
    hiddenLaunchId.value = '';
  }

  static clearReserves = () => {
    reserveCount.innerText = 0;
    username.value = '';
    startDate.value = '';
    endDate.value = '';
  }

  static postComment = async () => {
    const launchId = hiddenLaunchId.value;
    if (txtname.value !== '' && txtcomment.value !== '') {
      await InvolvementService.postComment(
        launchId,
        new Comment(txtname.value, '', txtcomment.value),
      );
    }

    InvolvementUI.clearComments();
    InvolvementUI.renderComments(launchId);
  }

  static postReservation = async () => {
    const launchId = hiddenLaunchId1.value;
    if (username.value !== '' && startDate.value !== '' && endDate.value !== '') {
      await InvolvementService.postReservation(launchId,
        new Reserve(username.value, startDate.value.toString(), endDate.value.toString()));
    }

    InvolvementUI.clearReserves();
    InvolvementUI.renderReserves(launchId);
  }

  static renderLikes = (element, launchId) => {
    InvolvementService.getLikes(launchId).then((likes) => {
      element.innerText = likes;
    });
  }

  static postLike = (element, launchId) => {
    InvolvementService.postLike(launchId).then(() => {
      element.innerText = parseInt(element.innerText, 10) + 1;
    });
  }
}

btnSaveComment.addEventListener('click', async () => {
  await InvolvementUI.postComment();
});

btnSaveReserve.addEventListener('click', async () => {
  await InvolvementUI.postReservation();
});