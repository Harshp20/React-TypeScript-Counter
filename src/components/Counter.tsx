interface Props {
    count: number;
  }
  
  const Counter: React.FC<Props> = ({ count }) => {
    return <p style={{ fontSize: "100px" }}>{count}</p>;
  };
  
  export default Counter;
  