import Item from "./Item";

const List = ({ list, onRemoveItem }) => {
  console.log(list);
  return (
    <div className="">
      {list.map((item) => {
        return (
          <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        );
      })}
    </div>
  );
};

export default List;
