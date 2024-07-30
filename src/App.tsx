import { useState } from 'react';
import './App.css';
import Quiz from './pages/quiz';
function App() {
  const [name,setName]=useState();
  const callbackFunction=()=>{
alert('hi I am in parent')
  }
  return (
    <div className="main__wrap">
    <main className="container">
      <div>
        <Quiz callbackFunction={callbackFunction}/>
      </div>
    </main>
  </div>
  );
}

export default App;
