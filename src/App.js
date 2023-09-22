//import logo from './logo.svg';
import './App.css';
import Comp from './component/Comp';
import Classcomp from './component/classcomp';
import User from './component/usestate';
import StyleElement from './component/Useref';
import Mohan from './component/Usestate2';
import Counter from './component/Usereducer';
import Phone from './component/Props';


function App() {
  return (
    <div className="App">
      <Comp />
      <Classcomp/>
      <User/>
      <Mohan/>
      <StyleElement/>
      <Counter/>
      <Phone name= " Iphone"  model ="13"/>
      
    </div> 
  );
}

export default App;
