import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import strength from '../asset/strength.png';
import intel from '../asset/intel.png';
import agile from '../asset/agile.png';
import Contain from './Contain';
import { getAllHeroesList } from '../redux/main/Home';

function home() {
  const allHeroes = useSelector((state) => state.allHeroReducer.heroes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHeroesList());
  }, [dispatch]);

  const strengthNum = allHeroes.filter((i) => i.primary_attr !== 'agi' && i.primary_attr !== 'int').length;
  const agilityNum = allHeroes.filter((i) => i.primary_attr !== 'str' && i.primary_attr !== 'int').length;
  const intellNum = allHeroes.filter((i) => i.primary_attr !== 'agi' && i.primary_attr !== 'str').length;

  return (
    <>
      <Contain />
      <div className="bg-more-darker-blue pl-2" data-testid="links">
        <p className=" text-sm text-white font-thin">CATEGORIES PRIMARY ATTRIBUTE</p>
      </div>
      <div className="all-cards flex flex-wrap" data-testid="links">
        <Link to={{ pathname: '/details' }} state={{ att: 'str' }}>
          <div className="bg-my-dark-blue w-48 h-44 pt-1">
            <div className="flex justify-between">
              <img src={strength} alt="strength icon" className="h-20 w-20 opacity-80" />
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-white text-lg font-bold flex flex-col items-end mr-2">
              <p>Strength</p>
              <p>Heroes</p>
              <p>
                {strengthNum }

              </p>
            </div>
          </div>
        </Link>
        <Link to={{ pathname: '/details' }} state={{ att: 'agi' }}>
          <div className="bg-more-darker-blue w-48 h-44 pt-1">
            <div className="flex justify-between">
              <img src={agile} alt="strength icon" className="h-20 w-20 opacity-80" />
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-white text-lg font-bold flex flex-col items-end mr-2">
              <p>Agility</p>
              <p>Heroes</p>
              <p>
                { agilityNum }
                {' '}
              </p>
            </div>
          </div>
        </Link>
        <Link to={{ pathname: '/details' }} state={{ att: 'int' }}>
          <div className="bg-more-darker-blue w-48 h-44 pt-1">
            <div className="flex justify-between">
              <img src={intel} alt="strength icon" className="h-20 w-20 opacity-80" />
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-white text-lg font-bold flex flex-col items-end mr-2">
              <p>Intelligence</p>
              <p>Heroes</p>
              <p>
                {' '}
                { intellNum}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default home;
