import Image from "next/image";
import S from "../assets/images/S.png";
import mail from "../assets/images/mail.png";
import phone from "../assets/images/phone.png";
import location2 from "../assets/images/location2.png";
import globe from "../assets/images/globe.png";

const BottomIconsContainer = () => {
  return (
    <div className="bottom-icons-container">
      <span className="bottom-icon-div">
        <Image
          src={S}
          height={18}
          width={11}
          alt=""
          className="bottom-card-img"
        />
      </span>
      <span className="bottom-icon-div">
        <Image
          src={mail}
          height={16}
          width={20}
          alt=""
          className="bottom-card-img-two"
        />
      </span>
      <span className="bottom-icon-div">
        <Image
          src={phone}
          height={18}
          width={18}
          alt=""
          className="bottom-card-img-three"
        />
      </span>
      <span className="bottom-icon-div">
        <Image
          src={location2}
          height={18}
          width={18}
          alt=""
          className="bottom-card-img-three"
        />
      </span>
      <span className="bottom-icon-div">
        <Image
          src={globe}
          height={20}
          width={22}
          alt=""
          className="bottom-card-img-five"
        />
      </span>
    </div>
  );
};

export default BottomIconsContainer;
