import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import BorderCard from './components/common/BorderCard';
import CounterCard from './components/common/CounterCard';


function App() {
  const name = "travis";

  return (
    <div className="App" style={{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: "25rem"
    }}>
    <CounterCard />
     {/* <BorderCard>
       <Counter/>
     </BorderCard> */}
    </div>
  );
}

export default App;
