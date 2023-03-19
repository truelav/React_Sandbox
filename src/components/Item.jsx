const Item = ({ item, onRemoveItem }) => {
  {
    console.log(item);
  }
  return (
    <div>
      <div>
        <a href={item.url}>{item.title}</a>
      </div>
      <div>{item.author}</div>
      <div>{item.num_comments}</div>
      <div>{item.points}</div>
      <div>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Item;
