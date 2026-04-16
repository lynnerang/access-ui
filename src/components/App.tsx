import "./App.scss";
import { Button } from "@/components";

function App() {
  return (
    <main className="app">
      <h1>Accessibility UI</h1>

      <div className="button-grid">
        <section>
          <h2>Primary</h2>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </section>

        <section>
          <h2>Secondary</h2>
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </section>

        <section>
          <h2>Tertiary</h2>
          <Button variant="tertiary">Default</Button>
          <Button variant="tertiary" disabled>
            Disabled
          </Button>
        </section>
      </div>

      <input aria-label="Name input" placeholder="Enter your name" />
    </main>
  );
}

export default App;