import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <Student 
        name="Badsha Hossain" 
        age={26} 
      />
      <Student 
        name="Masud Rana" 
        age={28} 
      />
      <Student 
        name="Minhajur Rahman" 
        age={26} 
      />
    </div>
  );
}

export default App;
