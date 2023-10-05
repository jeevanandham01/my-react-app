//import logo from './logo.svg';
import './App.css';
import Comp from './component/Comp';
import Classcomp from './component/classcomp';
import User from './component/usestate';
import StyleElement from './component/Useref';
import Mohan from './component/Usestate2';
import Counter from './component/Usereducer';
import Phone from './component/Props';
import Home from './component/Home';
import List1 from './component/keys';
import Greeting2 from './component/Greeting';
import Stateless from './component/New-example/Stateless';
import Name from './component/New-example/Component';
import Visit from './component/New-example/Component2';
import Counter1 from'./component/New-example/Stateful-Component';


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
      <Home/>
      <List1/>
  <Greeting2/>
  <Stateless name="JEEVANANDHAM" />
<Name/> 
<Visit name="YAASH"/> 
<Counter1/>

    </div> 
  );
}

export default App;
