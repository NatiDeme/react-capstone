import { Link } from 'react-router-dom';
import strength from '../asset/strength.png';
import intel from '../asset/intel.png';
import Contain from './Contain';

function home() {
  return (
    <>
      <Contain />
      <div className="bg-more-darker-blue pl-2">
        <p className=" text-sm text-white font-thin">CATEGORIES PRIMARY ATTRIBUTE</p>
      </div>
      <div className="all-cards flex flex-wrap">
        <Link to="/strength">
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
              <p>36</p>
            </div>
          </div>
        </Link>
        <Link to="/agility">
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
              <p>Agility</p>
              <p>Heroes</p>
              <p>36</p>
            </div>
          </div>
        </Link>
        <Link to="/intelligence">
          <div className="bg-more-darker-blue w-48 h-44 pt-1">
            <div className="flex justify-between">
              <img src={strength} alt="strength icon" className="h-20 w-20 opacity-80" />
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-white text-lg font-bold flex flex-col items-end mr-2">
              <p>Intelligence</p>
              <p>Heroes</p>
              <p>36</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default home;
