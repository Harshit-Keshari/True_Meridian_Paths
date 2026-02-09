import "bootstrap/dist/css/bootstrap.min.css";
import Navigation_bar from "./components/Navigation_bar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div>
      <Navigation_bar></Navigation_bar>
      <Hero></Hero>
      <Introduction></Introduction>
    </div>
  );
}

export default App;
