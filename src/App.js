import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap-reboot.min.css';

import Home from './screen/Home';
import OperatingArea from './screen/OperatingArea';
import Layout from './Layout';
import Declaimer from './screen/Disclaimer';
import NewProject from './screen/NewProject';
import Login from './screen/Login';
import AccountSetup from './screen/AccountSetup';
import Mint from './screen/Mint';
import PjContainer from "./container/PJContainer";
import MapBox from "./screen/MapBox";

function App() {
  return (
      <Layout className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/operating-area" component={OperatingArea} />
          <Route exact path="/declaimer" component={Declaimer} />
          <Route exact path="/account-setup" component={AccountSetup} />
          <Route exact path="/new-project" component={NewProject} />
          <Route exact path="/project-details" component={PjContainer} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/map" component={MapBox} />
          {/*<Route exact path="/bond" component={Bond} />*/}
          <Route exact path="/bond" component={Mint} />
        </Switch>
      </Layout>
  );
}

export default App;
