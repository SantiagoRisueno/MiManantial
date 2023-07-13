import Item from "./Item";
const Items = ({ items, deleteItem }) => {
  return (
    <>
      {items.map((item) => (
        <Item item={item} deleteItem={deleteItem} key={item.id} />
        
      ))}
    </>
  );
};

export default Items;
