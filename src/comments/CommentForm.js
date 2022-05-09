import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CommentForm = ({
  handleSubmit,
  submitLabel
}) => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(username, text);
    setText("");
    setUsername("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Name..." value={username} onChange={(e) => setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Write a new post..." value={text} onChange={(e) => setText(e.target.value)}/>
      </Form.Group>
      <Button variant="outline-primary" type="submit" disabled={isTextareaDisabled}>
        Submit
      </Button>
    </Form>
  );
};

export default CommentForm;
