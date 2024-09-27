import { useState } from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { TransferBanner } from "./TansferBannerComponent";
import { Services } from "./services-component";
import { Container } from "./reusable-componenets/banner-container";
import { Button } from "./reusable-componenets/button";
import { NameBanner } from "./login";
import { FaUserClock } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";


export default function Palmpay() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <NameBanner setName={setName} submitted={setSubmitted} />
      <Navbar name={name} />
      <Banner />
      <TransferBanner />
      <InterbankTransfer />
      <Services />
    </>
  );
}

function Navbar({ name }) {
  return (
    <div className="intro">
      <div>
       < FaUserCircle color="6431ff" size={26} />
      </div>
      <div>
        <h1>
          <b>
            <b>Hi,{name}</b>
          </b>
        </h1>
        <p className="welcome-text">Welcome, let's make payments!</p>
      </div>
      <div className="icons">
        <a href="https://wa.me/qr/G6HTWXETO77YD1">
          <TfiHeadphoneAlt size={20} style={{ marginTop: 4 }} />
        </a>

        <div className="notifications">
          <span className="badge"> 99+</span>
          <IoIosNotificationsOutline size={29} />
        </div>
      </div>
    </div>
  );
}

function Banner() {
  const [showBalance, setShowBalance] = useState(true);
  function show() {
    setShowBalance((f) => !f);
  }
  const [balance, setBalance] = 100
  function addMoney(){
    setBalance((prevBal) => prevBal + 100)
  }
    return (
    <Container className="main-banner">
      <div className="banner">
        <div className="banner-top">
          <div className="verification-icon">✅</div>
          <p>Available Balance </p>
          <div style={{ marginTop: 4 }} onClick={show}>
            {showBalance ? <BsEyeSlash /> : <BsEye />}
          </div>
          <div className="trans-history">
            <p>Transaction History </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Balance showBalance={showBalance} balance={balance} />
          <Button style={{ marginTop: 5 }} onClick={addMoney}>
            Add Money
          </Button>
        </div>
      </div>
      <div className="banner-footer">
        <p>
          <span>
            Earn
            <b> 20% </b>
          </span>
          interest with your idle funds.
          <span>
            <b> Earn now →</b>
          </span>
        </p>
      </div>
    </Container>
  );
}
function Balance({ showBalance, balance }) {
  return (
    <>
      <p className="amount">
        <b>{showBalance ? "****" : balance}</b>
      </p>
    </>
  );
}
function InterbankTransfer() {
  return (
    <Container className="main-banner py-1" style={{ height: 75 }}>
      <h1 style={{ marginLeft: 20, marginTop: 10 }}>
        <b>Interbank transfer</b>
      </h1>
      <div className="flex ml-5 mt-2">
        <p>₦100,000 Success</p>
        <p style={{ position: "absolute", right: 20 }}>
          {new Date().toLocaleTimeString()}
        </p>
      </div>
    </Container>
  );
}
