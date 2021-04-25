import React from 'react';
import ReactDOM from 'react-dom';
import { SudokuBoardProvider } from './context/SudokuBoardContext'
import App from './components/App';

import './styles/index.scss'

ReactDOM.render(
  <SudokuBoardProvider>
    <App />
  </SudokuBoardProvider>,
  document.getElementById('root')
);
