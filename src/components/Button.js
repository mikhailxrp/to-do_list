function Button({ text, btnClass, action, id }) {
  return (
    <button className={"btn"} style={btnClass} onClick={() => action(id)}>
      {text}
    </button>
  );
}

export default Button;
