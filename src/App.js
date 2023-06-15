import Stars from './components/StarFunc.js'
import './css/main.css';

function App() {
  return (
    <div className="main-content">
      <Stars count={Number(5)}/>
    </div>
  );
}

export default App;
