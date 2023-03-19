// Tests in Jest consist of test suites (describe), which are comprised of test cases (it), which have assertions (expect) that turn out green or red:
import React from "react";
import renderer from "react-test-renderer";
import Item from "./components/Item";
import List from "./components/List";
import InputWithLabel from "./components/InputWithLabel";
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
  const handleRemoveItem = jest.fn();

  let component;
  beforeEach(() => {
    component = renderer.create(
      <Item item={item} onRemoveItem={handleRemoveItem} />
    );
  });

  it("renders all properties", () => {
    expect(component.root.findByType("a").props.href).toEqual(
      "https://reactjs.org/"
    );
  });

  it("calls onRemoveItem on Button click", () => {
    component.root.findByType("button").props.onClick();

    expect(handleRemoveItem).toHaveBeenCalledTimes(1);
    expect(handleRemoveItem).toHaveBeenCalledWith(item);

    expect(component.root.findAllByType(Item).length).toEqual(1);
  });
});

describe("List", () => {
  const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  it("renders two items", () => {
    const component = renderer.create(<List list={list} />);

    expect(component.root.findAllByType(Item).length).toEqual(2);
  });
});

// describe("InputWithLabel", () => {
//   const searchFormProps = {
//     searchTerm: "React",
//     onSearchInput: jest.fn(),
//     onSearchSubmit: jest.fn(),
//   };

//   let component;

//   beforeEach(() => {
//     component = renderer.create(<InputWithLabel {...searchFormProps} />);
//   });

//   it("renders the input field with its value", () => {
//     const value = component.root.findByType(InputWithLabel).props.value;

//     expect(value).toEqual("React");
//   });

//   it("changes the input field", () => {
//     const pseudoEvent = { target: "Redux" };

//     component.root.findByType("input").props.onChange(pseudoEvent);

//     expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1);
//     expect(searchFormProps.onSearchInput).toHaveBeenCalledWith(pseudoEvent);
//   });

//   it("submits the form", () => {
//     const pseudoEvent = {};

//     component.root.findByType("form").props.onSubmit(pseudoEvent);

//     expect(searchFormProps.onSearchSubmit).toHaveBeenCalledTimes(1);
//     expect(searchFormProps.onSearchSubmit).toHaveBeenCalledWith(pseudoEvent);
//   });
// });
