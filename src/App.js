import './App.css';
import Slides from "./components/Slides";

function App({slides}) {
  return (
    <div className="App">      
      <div className="App">
        <Slides slides={slides} />
      </div>
    </div>
  );
}

export default App;
