import Actions from "./components/Actions";
import Header from "./components/Header";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
        <Actions />
      </Header>
    </div>
  );
}

export default App;
