import './App.css';
import ButtonOne from './components/ButtonOne';

function App() {
  // Button has different designs for disable / not disable
  // Disable flag is passed as props
  // The style manipulation done with stylesWrapper HOC

  return (
    <div className="App">
      <ButtonOne disable />
      <ButtonOne />
    </div>
  );
}

export default App;
