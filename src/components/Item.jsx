const Item = ({ item, onRemoveItem, handleSortStories }) => {
  return (
    <div className="listItem" style={{ display: "flex" }}>
      <div style={{ width: "40%" }} onClick={() => handleSortStories("TITLE")}>
        <a href={item.url}>{item.title.split("").slice(0, 50).join("")}</a>
      </div>
      <div style={{ width: "30%" }} onClick={() => handleSortStories("AUTHOR")}>
        {item.author}
      </div>
      <div
        style={{ width: "10%" }}
        onClick={() => handleSortStories("COMMENT")}
      >
        {item.num_comments}
      </div>
      <div style={{ width: "10%" }} onClick={() => handleSortStories("POINT")}>
        {item.points}
      </div>
      <div style={{ width: "10%" }}>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Item;
