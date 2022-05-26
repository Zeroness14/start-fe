import { useState } from 'react';
import Form from './Form';
import Result from './Result';

function App() {
const [value, setValue] = useState('');
const [todos, set]

  return (
    <div className="App">
      <div className="container">
        <header>
        <h1>Todo List</h1>



        <Form />
      </header>
      <div id="todos"></div>
    </div>
    </div>
  );
}

export default App;
