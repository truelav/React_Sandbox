// Tests in Jest consist of test suites (describe), which are comprised of test cases (it), which have assertions (expect) that turn out green or red:
import React from "react";
import renderer from "react-test-renderer";
import Item from "./components/Item";
// import App from './App';

describe("truthy and falsy", () => {
  // test case
  it("true to be true", () => {
    // test assertion
    expect(true).toBe(true);
  });

  // test case
  it("false to be false", () => {
    // test assertion
    expect(false).toBe(false);
  });
});

describe("Item", () => {
  const item = {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  };

  it("renders all properties", () => {
    const component = renderer.create(<Item item={item} />);

    expect(component.root.findByType("a").props.href).toEqual(
      "https://reactjs.org/"
    );
  });

  it("calls onRemoveItem on Button click", () => {
    const handleRemoveItem = jest.fn();

    const component = renderer.create(
      <Item item={item} onRemoveItem={handleRemoveItem} />
    );

    component.root.findByType("button").props.onClick();

    expect(handleRemoveItem).toHaveBeenCalledTimes(1);
    expect(handleRemoveItem).toHaveBeenCalledWith(item);

    expect(component.root.findAllByType(Item).length).toEqual(1);
  });
});
