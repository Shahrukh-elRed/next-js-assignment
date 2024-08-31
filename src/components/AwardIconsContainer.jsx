import Image from "next/image";
import award1 from "../assets/images/award1.png";
import award2 from "../assets/images/award2.png";
import award3 from "../assets/images/award3.png";

const AwardIconsContainer = () => {
  return (
    <div className="award-icons-container">
      <Image src={award1} alt="" height={30} width={30} />
      <Image src={award2} alt="" height={30} width={30} />
      <Image src={award3} alt="" height={30} width={30} />
      <div className="icon-plus-count">
        <span className="count">+3</span>
      </div>
    </div>
  );
};

export default AwardIconsContainer;
