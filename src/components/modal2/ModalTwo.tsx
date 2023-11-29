import React, { useState } from 'react';
import './styles.css';

interface ModalProps {
  open: boolean;
  bodyText: string;
  buttonClick: () => void;
  buttonName: string;
}

const ModalTwo: React.FC<ModalProps> = ({ open, bodyText, buttonClick, buttonName }) => {
  return (
    <div className={open ? 'inner-modal inner-modal-open' : 'inner-modal'}>
      <Content open={open} bodyText={bodyText} buttonClick={buttonClick} />
    </div>
  );
};

interface ContentProps {
  open: boolean;
  bodyText: string;
  buttonClick: () => void;
}

const Content: React.FC<ContentProps> = ({ open, bodyText, buttonClick }) => {
  return (
    <div className={open ? 'content-wrapper content-open' : 'content-wrapper'}>
      <i className="fa fa-times-circle" onClick={buttonClick}></i>
      <p className="modal-content">{bodyText}</p>
    </div>
  );
};

interface ButtonProps {
  open: boolean;
  bodyText: string;
  buttonClick: () => void;
  buttonName: string;
}

const Button: React.FC<ButtonProps> = ({ open, bodyText, buttonClick, buttonName }) => {
  return (
    <div id="modal-button">
      <button className="button" onClick={buttonClick}>
        {buttonName}
      </button>
      <ModalTwo open={open} buttonClick={buttonClick} bodyText={bodyText} buttonName={''} />
    </div>
  );
};

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const buttonClick = () => {
    setOpen(!open);
  };

  const bodyText = "Hello World";
  const buttonName = "Click";

  return (
    <Button buttonClick={buttonClick} open={open} bodyText={bodyText} buttonName={buttonName} />
  );
};

export default Modal;
