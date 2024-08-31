import Image from "next/image";
import blueTickImg from "../assets/images/aadhaar-blue-tick.png";
import briefcase from "../assets/images/briefcase.png";
import location from "../assets/images/location.png";
import share from "../assets/images/share.png";
import cardThumbnail from "../assets/images/mini-card.png";
import star from "../assets/images/star.png";
import CommentCard from "@/components/CommentCard";
import commentImgOne from "../assets/images/comment_one.png";
import commentImgTwo from "../assets/images/comment_two.png";
import Head from "next/head";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import Link from "next/link";

toastConfig({
  theme: "dark",
});

export default function Home({ userData, metaData }) {
  const handleShare = async () => {
    const url = "https://next-js-assignment-one.vercel.app/";
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
        <title>el Red Profile</title>
        <meta
          property="og:title"
          content={metaData?.profileTitle}
          key="title"
        />
        <meta
          property="og:description"
          content={metaData?.description}
          key="description"
        />
        <meta
          property="og:image"
          content={metaData?.cardImageURL}
          key="image"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <div
        className="container"
        style={{
          backgroundImage: `url(
            ${userData?.result?.[0]?.profileDesignInfo?.profileBannerImageURL}
          )`,
        }}
      >
        <div className="profile-top-header">Profile</div>
        <div className="profile-container">
          <div className="profile-picture-div">
            <Image
              src={userData?.result?.[0]?.dpURL}
              className="profile-dp-image"
              width={60}
              height={60}
              alt=""
            />
          </div>

          <div className="user-name-div">
            <span className="user-name">
              {userData?.result?.[0]?.firstname +
                " " +
                userData?.result?.[0]?.lastname}
            </span>
            <Image
              src={blueTickImg}
              height={18}
              width={18}
              alt=""
              className="bluetick-image"
            />
          </div>

          <div className="user-title-div">
            <Image
              src={briefcase}
              height={24}
              width={24}
              alt=""
              className="user-title-img"
            />
            <span className="user-title">
              {userData?.result?.[0]?.title?.[0]?.value}
            </span>
          </div>

          <div className="user-location">
            <Image src={location} height={16} width={12} alt="" className="" />
            <span className="user-location-text">
              {userData?.result?.[0]?.address?.city +
                ", " +
                userData?.result?.[0]?.address?.country}
            </span>
          </div>

          <Link href="/shareCard">
            <div className="mini-card-thumbnail">
              <Image src={cardThumbnail} alt="" height={85} width={56} />
            </div>
          </Link>

          <div className="share-div">
            <span className="share-icon-div" onClick={handleShare}>
              <Image src={share} height={22} width={16} alt="" />
            </span>
            <span className="share-text" onClick={handleShare}>
              Share
            </span>
          </div>

          <div className="ratings-div">
            <div className="absolute-star">
              <Image src={star} height={28} width={28} alt="" />
            </div>
            <span className="ratings-header">Ratings</span>
            <div className="ratings-count-and-text">
              <span className="ratings-count">57</span>
              <span className="ratings-text">
                Has ethical code of conduct and is safe to do bussines with
              </span>
            </div>
            <hr className="solid" />
            <div className="ratings-count-and-text">
              <span className="ratings-count-two">27</span>
              <span className="ratings-text-two">
                Met In real life/Video call
              </span>
            </div>
          </div>

          <div className="comments-section">
            <div className="comments-header">
              <span className="comments-header-left">Comments</span>
              <span className="comments-header-right">See all</span>
            </div>
            <div className="comment-cards-container">
              <CommentCard
                img={commentImgOne}
                commentText="See you in the next event"
                tagged={true}
              />
              <CommentCard
                img={commentImgTwo}
                commentText="Never judge a book by it's cover"
                moreReplies={true}
              />
              <CommentCard
                img={commentImgTwo}
                commentText="Never judge a book by it's cover"
                moreReplies={true}
              />
              <CommentCard
                img={commentImgOne}
                commentText="See you in the next event"
                tagged={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
