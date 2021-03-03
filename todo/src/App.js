import React from 'react';

import './App.css';
import Todo from './Todo'

function App() {
  return (
    <div className="App">
      <h2>TODO APP</h2>
    <Todo />
      <footer style={{position:'relative', bottom:'0' , alignSelf:'center'}}>Developed by pushparaja</footer>
    </div>
  );
}

export default App;
