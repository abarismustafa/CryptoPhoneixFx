import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CardModuls({handleClose , show}) {
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Business Volume (BV) info</Modal.Title>
        </Modal.Header>
        <Modal.Body>When someone from your below tree subscribe this plan, You will get this Business Volume which will be used for matching bonus</Modal.Body>
      </Modal>
    </>
  );
}

export default CardModuls;