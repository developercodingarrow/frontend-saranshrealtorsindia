import { useState } from "react";
import styles from "./css/chipInput.module.css";
import SubmitBtn from "../buttonsElements/SubmitBtn";

const ChipInput = (props) => {
  const { title, handeSubmit, dataFor, updateFiled } = props;
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleChipRemove = (index) => {
    const updatedChips = [...chips];
    updatedChips.splice(index, 1);
    setChips(updatedChips);
  };
  const chipsString = chips.map((chip) => `${chip}`).join(", ");

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await handeSubmit({ [updateFiled]: chipsString }, dataFor);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_titleBox}>
        <p>{title}</p>
      </div>
      <div className={styles.card}>
        <div className={styles.card_body}>
          <form onSubmit={handelSubmit}>
            <div className={styles.inputContainer}>
              {chips.map((chip, index) => (
                <div key={index} className={styles.chip}>
                  {chip}
                  <span
                    className={styles.removeIcon}
                    onClick={() => handleChipRemove(index)}
                  >
                    &#10006;
                  </span>
                </div>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder="Type and press Enter"
                className={styles.input}
              />
            </div>
            <div className={styles.submitBtn_wrapper}>
              <SubmitBtn
                text="submit"
                buttonstyle="fullWidthBtn"
                btnColor="primaryBtnColor"
                btnSze="fullWidthBtnSize"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChipInput;
