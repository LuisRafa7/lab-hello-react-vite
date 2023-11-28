import "./App.css";
import Navbar from "./components/Navbar";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainApp">
        <h1>
          Say Hello to<br></br>ReactJS
        </h1>
        <p>
          You will learn how to use<br></br>the most popular frontend library,
          <br></br>and become a super ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
      <div className="icons">
        <div className="iconsEach">
          <img src={icon1} alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="iconsEach">
          <img src={icon2} alt="icon2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="iconsEach">
          <img src={icon3} alt="icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="iconsEach">
          <img src={icon4} alt="icon4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
