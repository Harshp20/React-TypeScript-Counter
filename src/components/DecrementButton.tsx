interface Props {
  decrementCount: () => void;
}

const DecrementButton: React.FC<Props> = ({ decrementCount }) => {
  return (
    <button
      style={{
        height: "100px",
        width: "70px",
        fontSize: "60px",
        marginRight: "10px",
      }}
      onClick={decrementCount}
    >
      -
    </button>
  );
};

export default DecrementButton;
