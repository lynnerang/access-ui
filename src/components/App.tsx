import "./App.scss";
import { Button } from "@/components";

function App() {
  return (
    <main className="app">
      <h1>Accessibility UI</h1>

      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button disabled>Disabled Primary</Button>
      <Button variant="secondary" disabled>Disabled Secondary</Button>
      <Button variant="tertiary" disabled>Disabled Tertiary</Button>
      <Button isLoading>Loading</Button>

      <input
        aria-label="Name input"
        placeholder="Enter your name"
      />
    </main>
  );
}

export default App;