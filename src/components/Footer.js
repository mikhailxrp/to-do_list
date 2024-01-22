import Button from "./Button";
const primaryBtn = {
  dispay: "block",
  marginTop: "10px",
  background: "rgba(61, 122, 253, 1)",
  color: "#fff",
};
const primaryText = "Добавить задачу";
const addText = "Добавить";

function Footer({ isAdd, add, handleChange, newText, addTask }) {
  return (
    <div className="footer">
      <div className="add-field">
        {isAdd ? (
          <input
            value={newText}
            onChange={(event) => handleChange("taskText", event)}
          />
        ) : (
          ""
        )}
      </div>
      <div className="wrapper-footer-btn">
        {isAdd ? (
          <Button btnClass={primaryBtn} text={addText} action={addTask} />
        ) : (
          <Button btnClass={primaryBtn} text={primaryText} action={add} />
        )}
      </div>
    </div>
  );
}

export default Footer;
