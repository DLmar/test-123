import './App.css';
import {Content, Sidebar} from "./components";

function App() {
  return (
    <div className="container flex max-w-fit ">
        <Sidebar/>
        <Content/>
    </div>
  );
}

export default App;
