import './App.css';
import UseEffectExample from './UseEffect/UseEffectExample';
import UseLayoutEffectExample from './UseLayoutEffect/UseLayoutEffectExample';
import UseReducerExample from './UseReducer/UseReducerExample';
import UseRefExample from './UseRef/UseRefExample';
import UseStateExample from './UseState/UseStateExample';

function App() {
  return (
    <div className="App">
      {/* <UseStateExample/> */}
      {/* <UseReducerExample/> */}
      {/* <UseEffectExample/> */}
      {/* <UseRefExample/> */}
      <UseLayoutEffectExample/>
    </div>
  );
}

export default App;
