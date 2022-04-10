import { Create } from './components/CreatePerson';
import { Read } from './components/ReadPersons';
import { Update } from './components/UpdatePerson';
import { ReadSensors } from "./components/ReadSensors";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

export const App = () => {
    let isCreateRoute = window.location.pathname === '/read';

    const onLinkButton = () => {
        isCreateRoute = window.location.pathname === '/read';
        window.location.replace("/create");
    }

    return (
          <Router>
            <div className="main">
                <div className='main-header'>
                    {isCreateRoute && <button className="main-header-link" onClick={onLinkButton}>
                        Create person
                    </button>}
                    <h2 className="main-header-title">React Crud Operations</h2>
                    <Link className="main-header-link" to='/sensors'>
                        Sensors request
                    </Link>
                </div>
              <div>
                <Route exact path='/create' component={Create} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Route exact path='/read' component={Read} />
              </div>

              <Route path='/update' component={Update} />
                <Route path='/sensors' component={ReadSensors} />
            </div>
          </Router>
        )
    }
