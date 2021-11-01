import './App.css';
import Form from './components/LoginForm';
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Form}></Route>
          <Route path='/signup' exact component={Register} ></Route>
          <Route path='/login' component={Form}></Route>
          <Route path='/loginpage' component={Form}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
