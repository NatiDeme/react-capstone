import axios from 'axios';

const baseURL = 'https://api.opendota.com/api/heroStats';
const GET_HEROES = 'GET_HEROES';
const strengthHeroes = {
  heroes: [],
};

const getStrengthHeroes = (heroes) => ({
  type: GET_HEROES,
  payload: heroes,
});

const getStrengthHeroesList = () => (dispatch) => {
  axios.get(baseURL)
    .then((result) => {
      const res = result.data;
      const sample = res.filter((i) => i.primary_attr !== 'int' && i.primary_attr !== 'agi');
      dispatch(getStrengthHeroes(sample));
    });
};

const strengthHeroReducer = (state = strengthHeroes, action) => {
  switch (action.type) {
    case GET_HEROES:
      return {
        heroes: action.payload,
      };
    default:
      return state;
  }
};

export default strengthHeroReducer;
export { getStrengthHeroes, getStrengthHeroesList };
