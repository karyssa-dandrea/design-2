import React from 'react';
import { useState } from 'react';
import Preview from '../preview/Preview';
import Editor from '../editor/Editor';
import './Main.css';

export default function Main() {
  const [person, setPerson] = useState('');
  const [house, setHouse] = useState('');
  const [pet, setPet] = useState('');
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);
  return (
    <main>
      <Preview {...{ person, house, pet, nameList }} />
      <Editor
        {...{
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
        }}
      />
    </main>
  );
}
