import "./App.scss";
import { Button, Input } from "@/components";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content" className="app">
        <header className="app-header">
          <h1>Accessibility UI</h1>
        </header>

        <section className="component-section">
          <h2>Buttons</h2>

          <div className="button-grid">
            <section>
              <h3>Primary</h3>
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
            </section>

            <section>
              <h3>Secondary</h3>
              <Button variant="secondary">Default</Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
            </section>

            <section>
              <h3>Tertiary</h3>
              <Button variant="tertiary">Default</Button>
              <Button variant="tertiary" disabled>
                Disabled
              </Button>
            </section>
          </div>
        </section>

        <section className="component-section">
          <h2>Inputs</h2>

          <div className="input-grid">
            <section>
              <h3>Input Variants</h3>
              <Input label="Default Input" placeholder="Enter something" />
              <Input label="Input with Helper" helperText="This is some helpful text" placeholder="Enter something" />
              <Input label="Input with Error" error="This is error text" placeholder="Enter something" />
            </section>

            <section>
              <h3>Input States</h3>
              <Input label="Disabled Input" disabled placeholder="Disabled" />
              <Input label="Required Input" required placeholder="Enter something" />
              <Input label="Full Width Input" fullWidth placeholder="Enter something" />
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;