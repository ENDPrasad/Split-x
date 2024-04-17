import { useState } from "react";
import Options from "../components/Options";
import TextAreaBox from "../components/TextAreaBox";

const Home = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState(",");

  const onChangeHandler = (box, data) => {
    console.log(box + ": " + data);
    if (box == "top") setInput1(data);
    else if (box == "dropdown") setOperator(data);
    else setInput2(data);
    // console.log()
  };

  const onClickHandler = (data) => {
    // console.log(data);
    if (data == "right") {
      let finalData = formatData(input1, operator);
      setInput2(finalData);
    } else {
      let finalData = deFormatData(input2, operator);
      setInput1(finalData);
    }
  };

  const formatData = (data, operator) => {
    let formattedData = data.split("\n").join(operator);
    console.log(formattedData);
    return formattedData;
  };

  const deFormatData = (data, operator) => {
    let formattedData = data.split(operator).join("\n");
    console.log(formattedData);
    return formattedData;
  };
  return (
    <section className="home-section">
      <div className="heading">
        <h2>Split-X</h2>
      </div>
      <div className="input-section">
        <TextAreaBox
          onChangeHandler={onChangeHandler}
          idx={"top"}
          defaultVal={input1}
        />
        <Options
          onClickHandler={onClickHandler}
          onChangeHandler={onChangeHandler}
        />
        <TextAreaBox
          onChangeHandler={onChangeHandler}
          idx={"bottom"}
          defaultVal={input2}
        />
      </div>
    </section>
  );
};

export default Home;
