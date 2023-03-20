import Item from "./Item";

const List = ({ list, onRemoveItem }) => {
  console.log(list);
  const genericItem = {
    author: "author",
    points: "points",
    title: "title",
    num_comments: "num_comments",
  };
  return (
    <div className="listContainer">
      <Item item={genericItem} onRemoveItem={onRemoveItem} />
      {list.map((item) => {
        return (
          <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        );
      })}
    </div>
  );
};

export default List;
