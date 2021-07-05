import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./app/Components/Header";
import Footer from "./app/Components/Footer";
import Container from "./app/Components/Container";
import Home from "./app/Home/Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="container-lg">
      <div className="row">
        <Header/>
        </div>
          <BrowserRouter>
            <Switch>
              <Route path="/Home" component={Home} exact/>
              <Route path="/Product" component={Container}/>
            </Switch>
          </BrowserRouter>
        <div>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
