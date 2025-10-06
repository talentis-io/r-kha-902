
import { useEffect } from "react";
import usePostDetails from "../Hooks/use-post-details";
import Loading from "../components/Loading/Loading";
import { useDispatch } from "react-redux";
import {cleanPost} from "../store/postsSlice";
function Details() {
  const {isLoading, error, post} = usePostDetails()
  const dispatch = useDispatch();
  useEffect(() => {
    return(() => {
      // alert("ana ghadi ntsed")
      dispatch(cleanPost())
    })
  },[dispatch])

  return (
    <Loading isLoading={isLoading} error={error}>
      <>
      <h1>Post Details</h1>
     <ul>
      <li>Id: #{post.id}</li>
      <li>Title: {post.title}</li>
      <li>Description: {post.desc}</li>
     </ul>
     </>
    </Loading>
  )
}

export default Details