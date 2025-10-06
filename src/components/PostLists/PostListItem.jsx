/* eslint-disable react/prop-types */
import { Button, ButtonGroup } from "react-bootstrap";
import ModalPopup from "../Modal/Modal";
import { useSelector } from "react-redux";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
function PostListItem({ posts, deletePostById, handleOpenCloseModal }) {
  const { isOpenModal } = useSelector((state) => state.modal);
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const displayPost = posts.map((post) => {
    return (
      <tr key={post.id}>
        <td>#{post.id}</td>
        <td>
          <Link to={`post/${post.id}/details`}>{post.title}</Link>
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button variant="success" onClick={() => {
              navigate(`post/${post.id}/edit`)
            }}>Edit</Button>
            <Button
              variant="danger"
              onClick={() => {
                setPost(post);
                handleOpenCloseModal(post.id);
              }}>
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  }).reverse();
  return (
    <>
      {displayPost}
      <ModalPopup
        isOpenModal={isOpenModal}
        post={post}
        deletePostById={deletePostById}
        handleOpenCloseModal={handleOpenCloseModal}
        text={"Do you realy Delete The Post?"}
      />
      
    </>
  );
}

export default PostListItem;
