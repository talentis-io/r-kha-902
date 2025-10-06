import usePostDetails from "../Hooks/use-post-details.js";
import Form from "react-bootstrap/Form";
import Loading from "../components/Loading/Loading.jsx";
import Button from "react-bootstrap/Button";
import { editPost } from "../store/postsSlice.js";
import { cleanPost } from "../store/postsSlice.js";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function EditPost() {
  const dispatch = useDispatch();
  const { isLoading, error, post } = usePostDetails(); // Custume Hook
  const navigate = useNavigate();
  const title = useRef(null);
  const desc = useRef(null);

  useEffect(() => {
    if (
      Object.keys(post).length > 0 &&
      title.current.value !== null &&
      desc.current.value !== null
    ) {
      
      title.current.value = post.title;
      desc.current.value = post.desc;
    }
  }, [post, title, desc]);

  useEffect(() => {
    return(() => {
      // alert("ana ghadi ntsed")
      dispatch(cleanPost())
    })
  },[dispatch])

  const handelForm = (e) => {
    e.preventDefault();
    dispatch(
      editPost({
        id: post.id,
        title: title.current.value,
        desc: desc.current.value,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <Form onSubmit={handelForm}>
        <Form.Group className="mb-3" controlId="formBasicTile">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" ref={title} placeholder="Enter Tile" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control ref={desc} as="textarea" rows={3} />
        </Form.Group>

        <Loading isLoading={isLoading} error={error}>
        <Button variant="primary" type="submit">
          submit
        </Button>
        </Loading>
      </Form>
    
  );
}

export default EditPost;
