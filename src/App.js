import React from 'react';
import {
  RecoilRoot,
} from 'recoil'

import CharactorCounter from './components/CharactorCounter'

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <CharactorCounter />
    </RecoilRoot>
  );
}

export default App;
