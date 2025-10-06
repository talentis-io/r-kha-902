/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
import PostListItem from "./PostListItem";
import { memo } from "react";
const PostLists = ({ posts, deletePostById, handleOpenCloseModal }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <PostListItem
          posts={posts}
          deletePostById={deletePostById}
          handleOpenCloseModal={handleOpenCloseModal}
        />
      </tbody>
    </Table>
  );
};

export default memo(PostLists);
