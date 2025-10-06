import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loading from "../Loading/Loading";
import { addPost } from "../../store/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function FormPost() {
  const navigate = useNavigate();
  const {  error, isLoading } = useSelector((state) => state.posts);

    const title = useRef(null);
    const desc = useRef(null);
  const dispatch = useDispatch();

  const handelAddPost = (e) => {
    const randomId = Math.floor(Math.random() * 10000);
    e.preventDefault();
    if (checkInputs(title.current, desc.current)) return;
    dispatch(
      addPost({
        id: randomId.toString(),
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

  const checkInputs = (input) => {
    if (input.value.length === 0) {
      alert("can't be the fieald empty");
      return true;
    }
    return false;
  };

  return (
    <>
      <Form onSubmit={handelAddPost}>
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
      {error && <h2>{error}</h2>}
    </>
  );
}

export default FormPost;
