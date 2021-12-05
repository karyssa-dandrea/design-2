import React from 'react';

export default function Preview({ person, house, pet, name, nameList }) {
  return (
    <div className={`preview ${name}`}>
      <img alt={person} height="150" src={`${process.env.PUBLIC_URL}/characters/${person}.png`} />
      <img alt={house} height="150" src={`${process.env.PUBLIC_URL}/characters/${house}.png`} />
      <img alt={pet} height="150" src={`${process.env.PUBLIC_URL}/characters/${pet}.png`} />
      <div id="cottage">
        {nameList.map((elem) => (
          <p key={elem}>{elem}</p>
        ))}
      </div>
    </div>
  );
}
