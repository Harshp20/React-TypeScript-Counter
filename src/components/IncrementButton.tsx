interface Props {
  incrementCount: Function;
}

const IncrementCounter: React.FC<Props> = ({ incrementCount }) => {
  return (
    <button
      style={{
        height: "100px",
        width: "70px",
        fontSize: "60px",
        marginLeft: "10px",
      }}
      onClick={() => incrementCount((prevCount: number) => prevCount + 1)}
    >
      +
    </button>
  );
};

export default IncrementCounter;
