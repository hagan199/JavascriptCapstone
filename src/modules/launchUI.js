import InvolvementUI from './involvementUI.js';
import LaunchService from './launchService.js';
import { getLaunchesCount } from './count.js';

const launchCardTemplate = document.querySelector('.launch-card.template');
const launchCount = document.querySelector('.launch-count');
const launchList = document.querySelector('.launch-list');
const launchModal = document.getElementById('launch-modal');
const img = launchModal.querySelector('.launch-img');
const h1 = launchModal.querySelector('h1');
const lsp = launchModal.querySelector('.lsp');
const mission = launchModal.querySelector('.mission');
const pad = launchModal.querySelector('.pad');
const location = launchModal.querySelector('.location');
const btnClose = document.querySelector('.close');

export default class LaunchUI {
  static renderLaunches = () => {
    LaunchService.getLaunches().then((launches) => {
      launchCount.textContent = getLaunchesCount(launches);
      launches.forEach((launch) => {
        const launchCard = launchCardTemplate.cloneNode(true);
        launchCard.className = 'launch-card';

        const imgHeader = launchCard.getElementsByClassName('imgHeader')[0];
        imgHeader.style.backgroundImage = `url('${launch.image}')`;

        const h3 = launchCard.getElementsByTagName('h3')[0];
        h3.innerText = launch.name;

        const btnComment = launchCard.querySelector('.comment');
        btnComment.addEventListener('click', () => {
          LaunchUI.showModal(launch.id);
        });

        const btnReserve = launchCard.querySelector('.reserve');
        btnReserve.addEventListener('click', () => {
          LaunchUI.showModalReserve(launch.id);
        });

        const likesCount = launchCard.querySelector('.likes span');
        InvolvementUI.renderLikes(likesCount, launch.id);
        const likeBtn = launchCard.querySelector('.likes i');
        likeBtn.addEventListener('click', () => InvolvementUI.postLike(likesCount, launch.id));

        launchList.appendChild(launchCard);
      });
    });
  }

  static showModalReserve = (launchId) => {
    const launchdata = LaunchService.getLaunch(launchId);

    img.style.backgroundImage = `url('${launchdata.image}')`;
    h1.innerText = launchdata.name;

    lsp.innerText = launchdata.lsp_name;
    mission.innerText = launchdata.mission_type;
    pad.innerText = launchdata.pad;
    location.innerText = launchdata.location;
    InvolvementUI.renderReserves(launchId);
    launchModal.style.display = 'block';
  }

  static showModal = (launchId) => {
    const launchdata = LaunchService.getLaunch(launchId);

    img.style.backgroundImage = `url('${launchdata.image}')`;
    h1.innerText = launchdata.name;

    lsp.innerText = launchdata.lsp_name;
    mission.innerText = launchdata.mission_type;
    pad.innerText = launchdata.pad;
    location.innerText = launchdata.location;

    InvolvementUI.renderComments(launchId);
    launchModal.style.display = 'block';
  }

  static closeModal = () => {
    InvolvementUI.clearComments();
    launchModal.style.display = 'none';
  }

  static showModal = (launchId) => {
    const launchdata = LaunchService.getLaunch(launchId);

    img.style.backgroundImage = `url('${launchdata.image}')`;
    h1.innerText = launchdata.name;

    lsp.innerText = launchdata.lsp_name;
    mission.innerText = launchdata.mission_type;
    pad.innerText = launchdata.pad;
    location.innerText = launchdata.location;

    InvolvementUI.renderComments(launchId);
    launchModal.style.display = 'block';
  }

  static closeModal = () => {
    InvolvementUI.clearComments();
    launchModal.style.display = 'none';
  }
}

btnClose.addEventListener('click', () => LaunchUI.closeModal());
