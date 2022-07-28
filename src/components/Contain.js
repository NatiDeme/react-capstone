import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dota from '../asset/dota.png';
import { getAllHeroesList } from '../redux/main/Home';

function contain() {
  const allHeroes = useSelector((state) => state.allHeroReducer.heroes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHeroesList());
  }, [dispatch]);
  return (
    <>
      <div className="bg-my-light-blue flex gap-6 items-center pl-10">
        <img src={dota} alt="Dota logo" className="h-36 opacity-95" />
        <div className="text-white">
          <p className="font-black text-3xl">Dota 2</p>
          <p data-testid="num-appeared">
            {allHeroes.length}
            {' '}
            Heros
          </p>
        </div>
      </div>
    </>
  );
}

export default contain;
