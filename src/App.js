import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import FlickrDashboard from './components/flickr/FlickrDashboard';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <Header />
        <div className='bg-dark text-light pt-5' style={{ minHeight: '100vh', }}>
          <div className='container' style={{paddingTop:'30px'}}>
            <Switch>
              <Route path='/' component={FlickrDashboard} exact />
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
