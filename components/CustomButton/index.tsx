import styles from './CustomButton.module.css';

interface Props {
  title: string;
  state: string;
  onClick: () => void;
}

const CustomButton = ({ title, state, onClick }: Props) => {
  return (
    <button
      className={state === 'active' ? styles.activeButton : styles.button}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
