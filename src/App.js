import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
  let login = false;

  if (login == true) {
    return <Header />;
  } else {
    return <h1>Hello World!</h1>;
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <h1>Hello World!</h1>
      </div>
    </div>
  );
}

export default App;
