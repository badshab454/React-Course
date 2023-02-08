import './App.css';


import Header from './Header'


import {Footer} from './Sidebar'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h2>Hello World!</h2>
        <p>Bring it on.</p>
        <Header/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
