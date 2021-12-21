import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import BorderCard from './components/common/BorderCard';
import CounterCard from './components/common/CounterCard';
import Button from './components/common/Button';



function App() {
  const name = "travis";

  return (
    <div className="App" style={{
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "25rem",
      maxWidth: "720"
    }}>
      <div style={{maxWidth: "720", width: "100%"}}>
      <BorderCard>
       <Counter/>
     </BorderCard>
     <Button>
       <p>Click me</p>
     </Button>
      </div>
    </div>
  );
}

export default App;
