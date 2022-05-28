import './App.css';
import UseContextExample from './UseContext/UseContextExample';
import UseEffectExample from './UseEffect/UseEffectExample';
import UseImperativeHandleExample from './UseImperativeHandle/UseImperativeHandleExample';
import UseLayoutEffectExample from './UseLayoutEffect/UseLayoutEffectExample';
import UseMemoExample from './UseMemo/UseMemoExample';
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
      {/* <UseLayoutEffectExample/> */}
      {/* <UseImperativeHandleExample/> */}
      {/* <UseContextExample/> */}
      <UseMemoExample/>
    </div>
  );
}

export default App;
