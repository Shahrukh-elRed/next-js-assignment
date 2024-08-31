import Head from "next/head";
import Image from "next/image";
import cardShare from "../../assets/images/cardShare.png";
import crossIcon from "../../assets/images/crossIcon.png";
import Link from "next/link";

const ShareCard = ({ userData, metaData }) => {
  console.log(metaData);
  const handleShare = async () => {
    const url = "https://next-js-assignment-one.vercel.app/shareCard";
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

          <div className="card-dp-container">
            <Image
              src={userData?.result?.[0]?.dpURL}
              className="card-dp-image"
              width={116}
              height={116}
              alt=""
            />
          </div>
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
