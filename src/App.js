import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import Home from "./pages/Home/"
import Nominate from './pages/Nominate'
import './App.css';


function App() {
  return (
    <Router>
      <AppProvider i18n={enTranslations}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nominate" component={Nominate} />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
