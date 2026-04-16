import "./App.scss";
import { Button, Input } from "@/components";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content" className="app">
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

      <div className="input-grid">
        <section>
          <h2>Input Variants</h2>
          <Input label="Default Input" placeholder="Enter something" />
          <Input label="Input with Helper" helperText="This is some helpful text" placeholder="Enter something" />
          <Input label="Input with Error" error="This is error text" placeholder="Enter something" />
        </section>

        <section>
          <h2>Input States</h2>
          <Input label="Disabled Input" disabled placeholder="Disabled" />
          <Input label="Required Input" required placeholder="Enter something" />
          <Input label="Full Width Input" fullWidth placeholder="Enter something" />
        </section>
      </div>
    </main>
    </>
  );
}

export default App;