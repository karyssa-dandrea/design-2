import React from 'react';

export default function Editor({
  person,
  setPerson,
  house,
  setHouse,
  pet,
  setPet,
  name,
  setName,
  nameList,
  setNameList,
  setPersonCount,
}) {
  const handlePersonCount = (e) => {
    setPerson(e.target.value);
    setPersonCount((prevState) => prevState + 1);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    setName('');
  };
  return (
    <div className="editor">
      <div className="form-control">
        <label htmlFor="person"> Character</label>
        <select value={person}>
          <option value="witch">Witch</option>
          <option value="fairy">Fairy</option>
          <option value="wizard">Wizard</option>
          <option value="elf">Elf</option>
        </select>
      </div>
      <div className="form-control"></div>
      <label htmlFor="house"> Home</label>
      <select value={house}>
        <option value="house5">Mushroom</option>
        <option value="house3">Cottage</option>
        <option value="house2">Cabin</option>
        <option value="house4">Mushroom #2</option>
      </select>
      <div className="form-control"></div>
      <label htmlFor="pet"> Pet</label>
      <select value={pet}>
        <option value="pet1">Kitty</option>
        <option value="pet4">Frog</option>
        <option value="pet3">Dragon</option>
        <option value="pet2">Deer</option>
      </select>

      <div className="form-control"> </div>
      <label htmlFor="name">Name Your Character!</label>
      <input name="name" type="text" value={name} />
      <button onClick={handleClick}>Add Name</button>
    </div>
  );
}
