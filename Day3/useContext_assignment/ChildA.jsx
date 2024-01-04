import ChildB from "./ChildB";

const ChildA = () => {
    return (
      <div>
        <p>Child A Component</p>
        <ChildB />
      </div>
    );
  };

  export default ChildA;