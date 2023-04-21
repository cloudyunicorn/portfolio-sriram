import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import {Home} from "./components/Home/Home";
import {CaseStudy} from "./components/CaseStudy/CaseStudy";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
        <Router>
      <Header />

      
          <Switch>
            <Route path="/casestudy" component={CaseStudy} />
            <Route path="/" component={Home} />

            <Redirect to="/" />
          </Switch>
        </Router>
      

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
