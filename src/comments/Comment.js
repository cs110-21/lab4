import { Button, Card, Col, Container, Stack } from "react-bootstrap";
import CommentForm from "./CommentForm";
import Votes from "./Votes";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  addComment,
  parentId = null,
  getReplies
}) => {

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";

  const replyId = parentId ? parentId : comment.id; // assign id of parent
  console.log(parentId, comment.id, replyId);

  return <div className="commentCard">
    <Stack direction="horizontal">
      <Stack className="commentText">
        <Col><h5>{comment.username}</h5></Col>
        <Col>{comment.body}</Col>
        <Col><div className="replyButton" onClick={() => setActiveComment({ id: comment.id, type: "replying", parentId: parentId })}>Reply</div></Col>
      </Stack>
      <Votes />
    </Stack>
    {
      isReplying && (<CommentForm submitLabel="Reply" handleSubmit={(username, text) => addComment(username, text, replyId)} />)
    }
    {replies.length > 0 && (
      <div className="replies">
        {replies.map((reply) => (
          <Comment
            comment={reply}
            key={reply.id}
            setActiveComment={setActiveComment}
            activeComment={activeComment}
            addComment={addComment}
            parentId={comment.id}
            replies={() => Comment.getReplies(comment.id)}
          />
        ))}
      </div>
    )}
  </div>
};

export default Comment;
