const Item = ({ item, onRemoveItem }) => {
  return (
    <div className="listItem" style={{ display: "flex" }}>
      <div style={{ width: "40%" }}>
        <a href={item.url}>{item.title.split("").slice(0, 50).join("")}</a>
      </div>
      <div style={{ width: "30%" }}>{item.author}</div>
      <div style={{ width: "10%" }}>{item.num_comments}</div>
      <div style={{ width: "10%" }}>{item.points}</div>
      <div style={{ width: "10%" }}>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Item;
