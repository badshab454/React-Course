import "./App.css";
import Home from "./Components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Home />
      <button className="btn btn-primary text-center">Try me</button>
      <div className="container">
        <div className="row">
          <h2 className="col-md-6">Hello</h2>
          <h2 className="col-md-6">Hello</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
