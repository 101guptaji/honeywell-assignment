import './App.css';
import MessageSigner from './components/MsgSigner';
import logo from './assets/Honeywell-Logo.png';

function App() {
  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <img
        src={logo}
        alt="Honeywell Logo"
        style={{ height: 50, marginBottom: 20 }}
      />
      <h2>Digital Signature App</h2>
      <MessageSigner />
    </div>
  );
}

export default App;
