import logo from './logo.svg';
import './App.css';

 import HomePage from './components/HomePage';
import SignIn from './components/auth/SignIn';
import PasswordLoginWithFirebase from './components/auth/PasswordLoginWithFirebase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <PasswordLoginWithFirebase />
        {/* <SignIn /> */}
       {/* <HomePage /> */}
      </header>
    </div>
  );
}

export default App;
