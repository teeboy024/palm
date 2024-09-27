import {
  atmIcon,
  betIcon,
  capture,
  cashBoxIcon,
  cupIcon,
  dataIcon,
  electricityIcon,
  insuranceIcon,
  referIcon,
  savingsIcon,
  tvIcon,
} from "./assets";
import { Container } from "./reusable-componenets/banner-container";
import IconCard from "./reusable-componenets/iconCard";

export const Services = () => {
  return (
    <Container className="main-banner py-2" style={{ height: 300 }}>
      <h1 style={{ marginLeft: 20, marginTop: 10 }}>
        <b>Services</b>
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-4 max-w-5xl mx-auto">
        <IconCard
          imageSrc={capture}
          altText="Airtime recharge icon"
          title="Airtime"
        />
        <IconCard imageSrc={dataIcon} altText="Data bundle icon" title="Data" />
        <IconCard imageSrc={betIcon} altText="Betting icon" title="Betting" />
        <IconCard
          imageSrc={electricityIcon}
          altText="Electricity bill icon"
          title="Electricity"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-4 max-w-5xl mx-auto">
        <IconCard imageSrc={tvIcon} altText="Television icon" title="TV" />
        <IconCard imageSrc={cupIcon} altText="Cup icon" title="Win Big" />
        <IconCard
          imageSrc={referIcon}
          altText="Refer and win icon"
          title="Refer & win  "
        />
        <IconCard imageSrc={atmIcon} altText="ATM card icon" title="ATM" />
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-4 max-w-5xl mx-auto">
        <IconCard
          imageSrc={cashBoxIcon}
          altText="Cash box icon"
          title="Cash Box"
        />
        <IconCard
          imageSrc={insuranceIcon}
          altText="Insurance icon"
          title="Insurance"
        />
        <IconCard
          imageSrc={savingsIcon}
          altText="Savings icon"
          title="Savings"
        />
        <IconCard
          imageSrc={electricityIcon}
          altText="Electricity bill icon"
          title="Atm"
        />
      </div>
    </Container>
  );
};
