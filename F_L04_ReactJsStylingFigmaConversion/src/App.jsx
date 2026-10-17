import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'

function App() {
  return window.location.pathname === '/signup' ? <SignUp /> : <Login />
}

export default App
