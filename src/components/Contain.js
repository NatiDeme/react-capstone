import dota from '../asset/dota.png';

function contain() {
  return (
    <>
      <div className="bg-my-light-blue flex gap-6 items-center pl-10">
        <img src={dota} alt="Dota logo" className="h-36 opacity-95" />
        <div className="text-white">
          <p className="font-black text-3xl">Dota 2</p>
          <p>137 Heros</p>
        </div>
      </div>
    </>
  );
}

export default contain;
