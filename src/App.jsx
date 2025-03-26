import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"
import AccountPage from "./components/AccountPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

