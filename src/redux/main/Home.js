import axios from 'axios';

const baseURL = 'https://api.opendota.com/api/heroStats';
const GET_HEROES = 'GET_HEROES';
const allHeroes = {
  heroes: [],
};

const getAllHeroes = (heroes) => ({
  type: GET_HEROES,
  payload: heroes,
});

const getAllHeroesList = () => (dispatch) => {
  axios.get(baseURL)
    .then((result) => {
      const res = result.data;
      dispatch(getAllHeroes(res));
    });
};

const allHeroReducer = (state = allHeroes, action) => {
  switch (action.type) {
    case GET_HEROES:
      return {
        heroes: action.payload,
      };
    default:
      return state;
  }
};

export default allHeroReducer;
export { getAllHeroes, getAllHeroesList };
