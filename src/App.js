// import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { PageLayout } from "./pages/common"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PageLayout} />
      </Switch>
    </Router>
  )
}

export default App
