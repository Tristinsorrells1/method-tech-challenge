import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className="landing-page">
      <h2>Random Cat Picture Generator</h2>
      <p className="tagline">The Cutest Website You'll Visit Today</p>
      <button class="refresh-page-button" onClick={(() => window.location.reload())}>Show Me a New Cat!</button>
      <img className="cat-image" src="https://cataas.com/cat" alt="Randomly generated cat picture"></img>
    </section>
  );
}

export default App;
