import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';



import Student from './components/Student'

function App() {
  return (
    <div className="App">
      <Student name="Badsha Hossain" 
      age={26} />
    </div>
  );
}

export default App;
