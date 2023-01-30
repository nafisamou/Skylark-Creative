import Development from "./components/design-&-development/Development";
import Transactions from "./components/transactions/Transactions";
import Team from "./components/team/Team";
import Footer from './components/footer/Footer';
import Header from "./components/Header/Header";

function App() {
  return (
    <div style={{ width:' 91.666667%,', margin: "auto auto" }}>
      <Header></Header>
      <Development></Development>
      <Transactions></Transactions>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;
