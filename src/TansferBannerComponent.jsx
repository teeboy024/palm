 
import { FaBuildingColumns } from "react-icons/fa6";
import { Container } from "./reusable-componenets/banner-container";

export function TransferBanner() {
  return (
    <Container className="transfer-banner">
      <h1 style={{ marginLeft: 20, marginTop: 10 }}>
        <b>Money Transfer</b>
      </h1>
      <div className="flex flex-row mt-3">
        <div className=" w-1/3 flex justify-center items-center text-black">
          <div className="trsf">
            <FaBuildingColumns
              className="cursor-pointer"
              style={{ marginLeft: 15 }}
              size={28}
              color="#6431ff"
            />
            <div className="badge1">
              <span className="text-yellow-400 text-sm">
                <b>0</b>
              </span>
              fee
            </div>
            <div>
              <p className="text-sm justify-center">
                <b> To Bank</b>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex justify-center items-center ">
          <div className="justify-center">
            <img
              src="src/assets/profile-pic.JPG"
              alt=""
              className="cursor-pointer"
              style={{ width: 65 }}
            />
            <div>
              <p style={{marginLeft: -10}} className="text-sm justify-center">
                <b>To Palmpay</b>
              </p>
            </div>
          </div>
        </div>

        <div className=" w-1/3 flex justify-center items-center">
          <div>
            <img
              src="src/assets/Naira-icon.JPG"
              alt=""
              className="cursor-pointer"
              style={{ width: 50 }}
            />
            <div>
              <p style={{marginLeft: -9}}  className="text-sm">
                <b>Withdraw</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
