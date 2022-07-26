import Stren from '../asset/strength.png';

function strength() {
  return (
    <>
      <div className="bg-my-light-blue flex gap-6 items-center pl-10">
        <img src={Stren} alt="Dota logo" className="h-36 opacity-95" />
        <div className="text-white">
          <p className="font-black text-3xl">Strength</p>
          <p>137 Heros</p>
        </div>
      </div>
      <div className="bg-more-darker-blue pl-2">
        <p className=" text-sm text-white font-thin">STRENGTH HEROES</p>
      </div>
      <div className="flex bg-my-dark-blue h-20 items-center text-white justify-between">
        <p className="ml-2">Anti Mage</p>
        <img src="sdas" alt="icons" />
        <div className="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default strength;
