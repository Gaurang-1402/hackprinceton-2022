// import logo from "./logo.svg"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import PaymentResultPage from "./Pages/PaymentResult/PaymentResult";
import CreatePaymentLinkPage from "./Pages/CreatePaymentLinkPage/CreatePaymentLinkPage";
import SideNav from "./components/SideNav/SideNav";
import LogoutButton from "./components/LogoutButton/LogoutButton";

import {
  useMoralis,
  // useNativeBalance,
  // useChain
  // useNFTBalances,
  // useERC20Balances,
  // useTokenPrice,
  // useNFTTransfers,
  // useWeb3Transfer
} from "react-moralis";

import background from "./assets/images/background.png";
import metamask from "./assets/images/metamask.png";
function App() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  return (
    <>
      <div className="App flex h-screen bg-cust_back">
        <Router>
          {/* <Route exact path="/" component={Login} /> */}
          <div className="flex">
            <SideNav />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/create" element={<CreatePaymentLinkPage />} />
              <Route exact path="/result" element={<PaymentResultPage />} />
            </Routes>
          </div>
          <div className="flex w-full justify-end pr-5">
            <div className="pt-4 pr-5">
              <LogoutButton />
            </div>
            <div className="pt-4  align-right pr-3">
              {isAuthenticated && (
                <img src={metamask} onClick={() => logout()} />
              )}
              {!isAuthenticated && (
                <div className="pt-2.5">
                  <button
                    onClick={() => authenticate()}
                    className="text-center bg-cust_tertiary ml-10
      text-2xl text-white font-bold w-60 h-20 rounded-xl"
                  >
                    Connect to wallet
                  </button>
                </div>
              )}
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
