import Board from './components/Board';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="main">
        <Board rows={4} columns={4} />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
