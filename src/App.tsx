import "./App.scss";

function App() {
  return (
    <main className="app">
      <h1>Accessibility UI</h1>

      <button aria-label="Primary action button">
        Click me
      </button>

      <input
        aria-label="Name input"
        placeholder="Enter your name"
      />
    </main>
  );
}

export default App;