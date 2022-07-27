import axios from 'axios';

const baseURL = 'https://api.opendota.com/api/heroStats';
const GET_HEROES = 'GET_HEROES';
const intelligenceHeroes = {
  heroes: [],
};

const getIntelligenceHeroes = (heroes) => ({
  type: GET_HEROES,
  payload: heroes,
});

const getIntelligenceHeroesList = () => (dispatch) => {
  axios.get(baseURL)
    .then((result) => {
      const res = result.data;
      const sample = res.filter((i) => i.primary_attr !== 'agi' && i.primary_attr !== 'str');
      dispatch(getIntelligenceHeroes(sample));
    });
};

const intelligenceHeroReducer = (state = intelligenceHeroes, action) => {
  switch (action.type) {
    case GET_HEROES:
      return {
        heroes: action.payload,
      };
    default:
      return state;
  }
};

export default intelligenceHeroReducer;
export { getIntelligenceHeroes, getIntelligenceHeroesList };
