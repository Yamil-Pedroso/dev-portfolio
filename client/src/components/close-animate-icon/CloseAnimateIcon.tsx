import "./styles.css";

interface ICloseAnimateIconProps {
  onClick: () => void;
  isOpen: boolean; 
}

const CloseAnimateIcon = ({ onClick, isOpen }: ICloseAnimateIconProps) => {
  return (
    <div
      className={`magic-icon-search ${isOpen ? "close" : ""}`} 
      onClick={onClick}
    >
      <span></span>
    </div>
  );
};

export default CloseAnimateIcon;
