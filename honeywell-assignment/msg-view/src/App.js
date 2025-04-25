import './App.css';
import MessageSigner from './components/MsgSigner';
import logo from './assets/Honeywell-Logo.png';

function App() {

  return (
    <div className="app">
      <img className='logo'
        src={logo}
        alt="Honeywell Logo"
      />
      <h2 className='title'>Digital Signature App</h2>
      <MessageSigner />
    </div>
  );
}

export default App;
