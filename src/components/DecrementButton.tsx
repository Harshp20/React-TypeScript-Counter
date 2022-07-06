interface Props {
    decrementCount: Function;
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
        onClick={() => decrementCount((prevCount: number) => prevCount - 1)}
      >
        -
      </button>
    );
  };
  
  export default DecrementButton;
  