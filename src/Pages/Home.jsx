import { useCallback, useEffect } from "react";
import PostLists from "../components/PostLists/PostLists";
import { getPosts, deletePost } from "../store/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";

import { openCloseModal } from "../store/ModalSlice";
// import { Alert } from "react-bootstrap";
function Home() {
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  // const {content, isopenAlert, variant} = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const deletePostById = useCallback(
    (id) => {
      dispatch(deletePost(id));
    },
    [dispatch]
  );

  const handleOpenCloseModal = useCallback(() => {
    dispatch(openCloseModal());
  }, [dispatch]);

  return (
    <Loading isLoading={isLoading} error={error}>
      <PostLists
        posts={posts}
        deletePostById={deletePostById}
        handleOpenCloseModal={handleOpenCloseModal}
      />
     
    </Loading>
  );
}

export default Home;
