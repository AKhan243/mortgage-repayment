import "./styles/App.css";
import logo from './ybs-logo.jpg';
import Form from "./components/Form";

function App() {
  return (
    <div
      className="App container"
      style={{maxWidth: 500, maxHeight: 500, margin: "1rem auto"}}
    >
      <img src={logo} alt="Logo"/>
      <h1>
        Mortgage Repayment Calculator{" "}
      </h1>
      <Form/>
    </div>
  );
}

export default App;
