import Footer from "./Footer";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary App</h1>
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
