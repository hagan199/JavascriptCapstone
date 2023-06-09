import Launch from './Modal.js';

export default class LauchAPI {
  static launchAPIURL = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?mode=list&status=8&ordering=window_end';

  static fetchLaunches = async () => {
    if (localStorage.getItem('launches') == null) {
      const launchArr = [];
      await fetch(LauchAPI.launchAPIURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          json.results.forEach((l) => {
            launchArr.push(
              new Launch(
                l.id,
                l.name,
                l.lsp_name,
                l.mission_type,
                l.pad,
                l.location,
                l.image,
              ),
            );
          });
        });

      const dataString = JSON.stringify(launchArr);
      localStorage.setItem('launches', dataString);
    }
    return JSON.parse(localStorage.getItem('launches'));
  }
}
