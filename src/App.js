import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
//import AboutPage from "./containers/HomeTemplate/AboutPage";
//import HomePage from "./containers/HomeTemplate/HomePage";
//import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import Navbar from "./containers/HomeTemplate/_components/Navbar";
import PageNotFound from "./containers/PageNotFound";
import { routesHome } from "./routes";
function App() {
  const renderLayoutHome = (routes) => {
    return routes?.map((item, index) => {
      return (
        <Route
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      );
    });
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <HomePage />
      <AboutPage />
      <ListMoviePage /> */}
        {/* <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/list-movie" component={ListMoviePage} /> */}
        {renderLayoutHome(routesHome)}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
