import './App.css';
import ContainerComponent from './Components/ContainerComponent';

function App() {
  return (
    <div className="container">
        <b>
         <header align="left" >
            Credit Card System
         </header>
        </b>
        <br/>
        <div align="left" className="inputHeading2">
            Add
        </div>
        <br/>
        <div>
         <ContainerComponent/>
        </div>
    </div>
  );
}

export default App;
