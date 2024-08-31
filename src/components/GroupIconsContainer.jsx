import Image from "next/image";
import group1 from "../assets/images/group1.png";
import group2 from "../assets/images/group2.png";
import group3 from "../assets/images/group3.png";

const GroupIconsContainer = () => {
  return (
    <div className="group-icons-container">
      <Image src={group1} alt="" height={30} width={30} />
      <Image src={group2} alt="" height={30} width={30} />
      <Image src={group1} alt="" height={30} width={30} />
      <Image src={group3} alt="" height={30} width={30} />
      <div className="icon-plus-count">
        <span className="count">+3</span>
      </div>
    </div>
  );
};

export default GroupIconsContainer;
