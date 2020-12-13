import logo from './logo.svg';
import './App.css';
import './boo.css';
import img2 from './boo.jpg';
function App() {
  return (
    <>
    <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
    <h1 className="titlered">Your name here</h1>
    <br/>
    <img src="./maxresdefault (1).jpg" alt="noo"/>
<br/>
<img  src={img2} alt="no"/>
     </div>
     </>
  );
}

export default App;
