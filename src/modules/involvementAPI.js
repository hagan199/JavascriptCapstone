import Comment from './comment.js';
import Reserve from './reserve.js';

export default class InvolvementAPI {
  static commentsURL =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1t7BiC343viu9RJP3IIx/comments'

  static likesURL =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1t7BiC343viu9RJP3IIx/likes'

  static reserveURL =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1t7BiC343viu9RJP3IIx/reservations'

  static fetchComments = async (launchId) => {
    try {
      const response = await fetch(`${InvolvementAPI.commentsURL}?item_id=${launchId}`);
      const json = await response.json();
      const comments = json.map((c) => new Comment(c.username, c.creation_date, c.comment));
      return comments;
    } catch (error) {
      document.getElementById('commenthead').innerHTML = 'No Comment';
      return [];
    }
  }

  static postComment = async (launchId, newcomment) => {
    await fetch(InvolvementAPI.commentsURL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: launchId,
        username: newcomment.username,
        comment: newcomment.comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  static fetchAllLikes = async () => fetch(InvolvementAPI.likesURL).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })

  static postLike = async (launchId) => {
    await fetch(InvolvementAPI.likesURL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: launchId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  static async getReservation(launchId) {
    try {
      const response = await fetch(`${InvolvementAPI.reserveURL}?item_id=${launchId}`);
      const json = await response.json();

      const reserves = json.map((c) => new Reserve(c.username, c.date_start, c.date_end));
      return reserves;
    } catch (error) {
      document.getElementById('reservehead').innerHTML = 'No Comment';
      return [];
    }
  }

  static postReservation = async (launchId, newreservation) => {
    await fetch(InvolvementAPI.reserveURL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: launchId,
        username: newreservation.username,
        date_start: newreservation.date_start,
        date_end: newreservation.date_end,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
}
