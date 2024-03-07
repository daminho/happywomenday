import logo from './logo.svg';
import './App.css';
import Flowers from './component/Flowers';


const ids = Array.from({length: 10}, (_, i) => i)


function App() {

  let flowers = ids.map((id) => {
      let bottom = Math.floor(Math.random() * 140) + 100
      let left = 2 - Math.floor(Math.random() * 4) + id * 10
      return <div style = {{position: "absolute", left: `${left}%`, bottom: `${bottom}px`, zIndex: `${id}`}}>
        <Flowers fIndex = {id}/>
      </div>}
    )

  return (
    <div style = {{overflow:'hidden', backgroundColor: "#59acff", height: "100vh", width: "100vw", zIndex: "-2", textAlign: "center"}}>
      <div style={{transform: "translate(0px, 50px)", fontSize: "50px", fontFamily:  'monospace'}}>Happy Women Day</div>
      <div style = {{position: "absolute", backgroundColor: "#2d302c", height: "300px", width:"100vw", bottom: "0px"}}></div>
      {flowers}
    </div>
  );
}

export default App;
