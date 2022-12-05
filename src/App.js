import logo from "./Color-logo-with-background.png";
import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Welcome" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by
            <a href="mailto:silvialeelee7@gmail.com"> Silvia Lee</a> and is{" "}
            <a
              href="https://github.com/ishilbi/react-dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a href="https://app.netlify.com/sites/lucky-cendol-1c5abe/overview">
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
