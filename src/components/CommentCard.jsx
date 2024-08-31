import Image from "next/image";

const CommentCard = ({ img, commentText, tagged, moreReplies }) => {
  return (
    <div className="comment-card">
      <Image src={img} alt="" height={42} width={42} className="comment-img" />
      <div className="comment-text-div">
        <div>
          <span className="commenter-name">Gwen Stacy</span>
          <span className="comment-text">{commentText}</span>
          {tagged && <span className="commenter-name">@roger vaccaro</span>}
        </div>
        <div className="likes-section">
          <span>1s</span>
          <span>241 Likes</span>
          <span className="cursor-pointer">Reply</span>
        </div>
        {moreReplies && (
          <div className="more-replies">
            <hr className="short-line"></hr>
            <span>View 2 more replies</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
