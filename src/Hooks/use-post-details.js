import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailPost} from "../store/postsSlice";
import { useEffect } from "react";
const usePostDetails = () => {
    const {id} = useParams();
    const {isLoading, error, post} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailPost(id))
    },[dispatch, id])

    return {isLoading, error, post};
}

export default usePostDetails;