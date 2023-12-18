import React, { useState } from 'react';

function Exp1({ playerName, Symbol, isactive }) {
  const [click, setClick] = useState(false);
  const [name, setName] = useState(playerName);

  const toggleClick = () => {
    setClick(!click);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <li className={isactive? 'active':undefined}>
      <span className="player">
        {click ? (
          <input type="text" value={name} onChange={handleNameChange} />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{Symbol}</span>
        <button onClick={toggleClick}>{click ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
}

export default Exp1;
dotenv.config({path:'./config.env'})