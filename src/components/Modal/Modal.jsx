/* eslint-disable react/prop-types */
import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from "react-redux";
import {openCloseAlert} from "../../store/Alert";

const  ModalPopup = ({isOpenModal, handleOpenCloseModal, post, deletePostById, text}) => {
  const dispatch = useDispatch();
  return (
    <>

      <Modal show={isOpenModal} onHide={handleOpenCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text} {post.title}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOpenCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            deletePostById(post.id);
            dispatch(openCloseAlert({content:"delete is Success", variant:"success"}))
            handleOpenCloseModal();
          }}>
            Confirme Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(ModalPopup);