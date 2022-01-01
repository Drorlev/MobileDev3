import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

const ModalIng = (props) => {
    if(!props.show){
        return null;
    }

    const TellRecipeToClose = () => {
        
        props.send2Papa(false);
    }

  return (
    <Modal show={props.show}>
        <Modal.Header closeButton onClick={TellRecipeToClose}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={TellRecipeToClose}>
            Close
          </Button>
          <Button variant="primary" onClick={TellRecipeToClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default ModalIng;