import { ThemeProvider } from "@material-ui/core/styles";
import React, { Fragment} from "react";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./Theme";
import "./App.css";
import Map from "./components/Map";
import Footer from "./components/Footer";
import SubMenu from "./components/SubMenu";
import ScrollToTop from "./components/ScrollToTop";

//Pages
import AboutPage from "./pages/AboutPage";
import ServicePage1 from './pages/ServicePage1';
import HomePage from './pages/HomePage';
import ServicePage2 from './pages/ServicePage2';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Fragment>
      <ScrollToTop />
        <div className="App">
          <PersistentDrawerLeft />
          <Switch>
            <Route exact path="/" render={(props) => <HomePage time="7" {...props} />} />
            <Route exact path="/about" render={(props) => <AboutPage time="7" {...props} />} />
            <Route exact path="/service1" render={(props) => <ServicePage1 time="7" {...props} />} />
            <Route exact path="/service2" render={(props) => <ServicePage2 time="7" {...props} />} />
          </Switch>
          <Map />
          <SubMenu />
          <Footer />
        </div>
        </Fragment>
      </Router>
    </ThemeProvider>
  );
}

export default App;
