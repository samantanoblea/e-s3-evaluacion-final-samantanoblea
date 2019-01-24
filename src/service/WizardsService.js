const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchWizards = () =>fetch(ENDPOINT).then(response => response.json());

export {fetchWizards};