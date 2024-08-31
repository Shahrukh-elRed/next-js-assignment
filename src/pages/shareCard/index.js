import Head from "next/head";
import Image from "next/image";
import cardShare from "../../assets/images/cardShare.png";
import crossIcon from "../../assets/images/crossIcon.png";
import blueTick from "../../assets/images/aadhaar-blue-tick.png";
import Link from "next/link";
import AwardIconsContainer from "@/components/AwardIconsContainer";
import GroupIconsContainer from "@/components/GroupIconsContainer";
import BottomIconsContainer from "@/components/BottomIconsContainer";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";

toastConfig({
  theme: "dark",
});

const ShareCard = ({ userData, metaData }) => {
  const handleShare = async () => {
    const time = new Date().getTime().toString().slice(-6);

    const url = `https://next-js-assignment-one.vercel.app/shareCard&t=${time}`;
    if (navigator.share) {
      try {
        await navigator.share({
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      toast("Share API is not supported in this browser!");
    }
  };

  return (
    <>
      <Head>
        <title>el Red User Card</title>
        <meta
          property="og:title"
          content={metaData?.cardTitle}
          key="cardtitle"
        />
        <meta
          property="og:description"
          content={metaData?.description}
          key="carddescription"
        />
        <meta
          property="og:image"
          content={metaData?.cardImageURL}
          key="cardimage"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>

      <span className="card-cross-div">
        <Link href="/">
          <span className="card-cross-container">
            <Image
              src={crossIcon}
              height={18}
              width={18}
              alt=""
              className="card-cross-icon"
            />
          </span>
        </Link>
      </span>
      <div
        className="card-container"
        style={{
          backgroundImage: `url(
            ${userData?.result?.[0]?.profileDesignInfo?.profileBannerImageURL}
          )`,
        }}
      >
        <div className="card-inner-container">
          <div className="card-share-div">
            <span className="card-share-icon-container" onClick={handleShare}>
              <Image
                src={cardShare}
                width={14}
                height={12}
                alt=""
                className="card-share-icon"
              />
            </span>
            <span className="card-share-text" onClick={handleShare}>
              Share
            </span>
          </div>
          <div className="card-dp-container-outer">
            <div className="card-dp-container">
              <Image
                src={userData?.result?.[0]?.dpURL}
                className="card-dp-image"
                width={116}
                height={116}
                alt=""
              />
              <Image
                src={blueTick}
                className="verified-blue-tick-png"
                width={25}
                height={25}
                alt=""
              />
            </div>
          </div>
          <div className="card-first-name">
            {userData?.result?.[0]?.firstname}
          </div>
          <div className="card-last-name">
            {userData?.result?.[0]?.lastname}
          </div>
          <div className="card-title">
            {userData?.result?.[0]?.title?.[0]?.value}
          </div>
          <div className="card-company">Wildcraft</div>
          <div className="card-location">
            {userData?.result?.[0]?.address?.city +
              ", " +
              userData?.result?.[0]?.address?.country}
          </div>
          <AwardIconsContainer />
          <GroupIconsContainer />
          <BottomIconsContainer />
        </div>
      </div>
    </>
  );
};

export default ShareCard;

export const getServerSideProps = async () => {
  let userData = await fetch(
    "https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b",
    { method: "POST" }
  );
  userData = await userData.json();

  let metaData = await fetch(
    "https://dev.elred.io/noSessionPreviewCardScreenshot?userCode=66961e8dcc9a8155d09b8c9b",
    { method: "POST" }
  );
  metaData = await metaData.json();

  return { props: { userData, metaData: metaData?.result?.[0] } };
};
