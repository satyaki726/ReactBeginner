import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';
//import { Greet } from './component/Greet';



function App() {
  return (
    <div className="App">
      {/*<Greet name="Satyaki">
        <button>Mar Sala k</button>
      </Greet>
      <Welcome name = "Rima">
        <button>Mar Sali k</button>
  </Welcome>*/}
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
