import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"
import SideNav from "./Components/SideNav/SideNav"
import CreatePaymentLinkPage from "./Pages/CreatePaymentLinkPage/CreatePaymentLinkPage"

import background from "./assets/images/background.png"
// import { MoralisProvider } from "react-moralis"
function App() {
  // const serverUrl = "https://bqwuyxfazmgl.usemoralis.com:2053/server"
  // const appId = "8AFd0WfrQKOtx64ZOz7M7tgf3yJu2SD3zAKO5eDM"
  return (
    <>
      {/* <MoralisProvider serverUrl={serverUrl} appId={appId}> */}
      <div className='App flex h-screen bg-cust_back'>
        <Router>
          <SideNav />
          <Routes>
            <Route exact path='/' element={<Homepage />} />

            <Route
              exact
              path='/createpayment'
              element={<CreatePaymentLinkPage />}
            />
          </Routes>
        </Router>
      </div>
      {/* </MoralisProvider> */}
    </>
  )
}

export default App
