import "./App.scss";
import { Button } from "@/components";

function App() {
  return (
    <main className="app">
      <h1>Accessibility UI</h1>

      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button isLoading>Loading</Button>
      <Button disabled>Disabled</Button>

      <input
        aria-label="Name input"
        placeholder="Enter your name"
      />
    </main>
  );
}

export default App;