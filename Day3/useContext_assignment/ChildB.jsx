const ChildB = () => {
    const fruitName = useContext(FruitContext);

    return (
      <div>
        <p>Child B Component</p>
        <p>Fruit Name: {fruitName}</p>
      </div>
    );
}

export default ChildB;