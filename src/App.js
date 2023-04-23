import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import ScrollTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import {Home} from "./components/Home/Home";
import {CaseStudy} from "./components/CaseStudy/CaseStudy";
import { Resume } from "./components/Resume/Resume";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
        <Router>
      <Header />

      
          <Switch>
            <Route path="/resume" component={Resume} />
            <Route path="/casestudy" component={CaseStudy} />
            <Route path="/" component={Home} />

            <Redirect to="/" />
          </Switch>
        </Router>
      

      <ScrollTop />
      <Footer />
    </div>
  );
};

export default App;
