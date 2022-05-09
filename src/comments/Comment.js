import { Button, Col, Container, Stack } from "react-bootstrap";
import CommentForm from "./CommentForm";
import Votes from "./Votes";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  addComment,
  parentId = null,
  //depth = 0,
  getReplies
}) => {

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";

  const replyId = parentId ? parentId : comment.id; // assign id of parent
  console.log(parentId, comment.id, replyId);
  const createdAt = new Date(comment.createdAt).toLocaleDateString(); // create date to display 

  return <Container className="border">
    <Stack direction="horizontal">
      <Stack>
        <Col>{comment.username}</Col>
        <Col>{comment.body}</Col>
        <Col><Button variant="outline-primary" onClick={() => setActiveComment({ id: comment.id, type: "replying", parentId: parentId })}>Reply</Button></Col>
      </Stack>
      <Votes />
    </Stack>
    {isReplying && (

      <CommentForm
        submitLabel="Reply"

        handleSubmit={(username, text) => addComment(username, text, replyId)}

      />
    )
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
  </Container>
};

export default Comment;
