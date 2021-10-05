import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Products from "./Products";
import Developers from "./Developers";
import Alert from "./components/Alert";
import { useGlobalContext } from "./context";
import Pruebas from "./Pruebas";
import Error from "./Error";
import Prueba2 from "./Prueba2";
import List from "./01-birthday/List";
import Tour from "./02-tours/Tour";
import Review from "./03-review/Review";
import Questions from "./04-questions/Question";
import Menus from "./05-menus/Menus";

function App() {
  const {
    alert: { show },
  } = useGlobalContext();

  return (
    <>
      <Router>
        <Navbar />
        {show && <Alert />}
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/create">
            <Submenu />
          </Route>
          <Route path="/sidebar">
            <Sidebar />
          </Route>
          <Route path="/developers">
            <Developers />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/pruebas">
            <Pruebas />
          </Route>
          <Route path="/prueba2">
            <Prueba2 />
          </Route>
          <Route path="/02-tours">
            <Tour />
          </Route>
          <Route path="/03-review">
            <Review />
          </Route>
          <Route path="/04-questions">
            <Questions />
          </Route>
          <Route path="/05-menus">
            <Menus />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
