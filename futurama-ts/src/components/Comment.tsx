import { CommentType } from "../@types/comment";

// A functional component that displays a single comment
const Comment = ({ comment }: { comment: CommentType }) => {
  // The component returns a div element that contains the comment's content
  // The div is styled using CSS grid to center its content and add a border, background color, and padding
  // The comment's user, comment text, and date are displayed in separate p elements

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        border: "1px solid black",
        gap: "0",
        margin: "10px",
        backgroundColor: "#4AE0FF",
        padding: "10px",
      }}>
      <p style={{ fontWeight: "bold" }}>Username: {comment.user}</p>
      <pre>{comment.comment}</pre>
      <p>{comment.date}</p>
    </div>
  );
};

export default Comment;
