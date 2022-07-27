import axios from 'axios';

const baseURL = 'https://api.opendota.com/api/heroStats';
const GET_HEROES = 'GET_HEROES';
const agilityHeroes = {
  heroes: [],
};

const getAgilityHeroes = (heroes) => ({
  type: GET_HEROES,
  payload: heroes,
});

const getAgilityHeroesList = () => (dispatch) => {
  axios.get(baseURL)
    .then((result) => {
      const res = result.data;
      const sample = res.filter((i) => i.primary_attr !== 'int' && i.primary_attr !== 'str');
      dispatch(getAgilityHeroes(sample));
    });
};

const agilityHeroReducer = (state = agilityHeroes, action) => {
  switch (action.type) {
    case GET_HEROES:
      return {
        heroes: action.payload,
      };
    default:
      return state;
  }
};

export default agilityHeroReducer;
export { getAgilityHeroes, getAgilityHeroesList };
