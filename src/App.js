import "./App.css";

function App() {
  return (
    <div className="App bg-info">
      <div className="header bg-dark">
        <div className="row">
          <div className="brand my-1">
            <h1>eStore</h1>
          </div>
          <div className="inp-container p-0 m-4 h-25 w-50 bg-light">
            <input className="form-control" type="text" placeholder="Enter" />
            <button>
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
