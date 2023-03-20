import React from "react";
import { sortBy } from "lodash";
import Item from "./Item";

const List = ({ list, onRemoveItem }) => {
  console.log(list);

  const [sort, setSort] = React.useState({
    sortKey: "NONE",
    isReversed: false,
  });

  const SORTS = {
    NONE: (list) => list,
    TITLE: (list) => sortBy(list, "title"),
    AUTHOR: (list) => sortBy(list, "author"),
    COMMENT: (list) => sortBy(list, "num_comments").reverse(),
    POINT: (list) => sortBy(list, "points").reverse(),
  };

  const handleSortStories = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;

    setSort({ sortKey: sortKey, isReverse: isReverse });
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReversed
    ? sortFunction(list).reverse()
    : sortFunction(list);
  const genericItem = {
    author: "author",
    points: "points",
    title: "title",
    num_comments: "num_comments",
  };

  return (
    <div className="listContainer">
      <Item
        item={genericItem}
        onRemoveItem={onRemoveItem}
        handleSortStories={handleSortStories}
      />
      {sortedList.map((item) => {
        return (
          <Item
            key={item.objectID}
            item={item}
            onRemoveItem={onRemoveItem}
            handleSortStories={handleSortStories}
          />
        );
      })}
    </div>
  );
};

export default List;
