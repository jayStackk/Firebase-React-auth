import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage';
import SignIn from './components/auth/SignIn';
import PasswordLoginWithFirebase from './components/auth/PasswordLoginWithFirebase';

function App() {
  return (
    <>
  
      <header className="App-header">
      <PasswordLoginWithFirebase />
      </header>
     

    </>



  );
}

export default App;
