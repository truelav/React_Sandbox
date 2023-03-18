import React from "react";

const InputWithLabel = ({
  id,
  value,
  type = "text",
  handleSearchSubmit,
  onInputChange,
  isFocused,
  children
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor={id}>{children}</label>
        &nbsp;
        <input
          ref={inputRef}
          id={id}
          type={type}
          value={value}
          onChange={onInputChange}
        />
      </form>
      <button type="submit">Submit</button>
    </>
  );
};

export default InputWithLabel;
