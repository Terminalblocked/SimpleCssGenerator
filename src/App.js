import { useState } from "react";
import SliderItem from "./components/SliderItem";
import Preview from "./components/Preview";
import "./styles/App.scss";
import "./styles/Normalize.scss";
import CodePreview from "./components/CodePreview";

function App() {
  const [inputs, setInputs] = useState([
    { title: "Left top", value: 0 },
    { title: "Right top", value: 0 },
    { title: "Right bottom", value: 0 },
    { title: "Left bottom", value: 0 },
  ]);
  const [borderRadii, setBorderRadii] = useState([0, 0, 0, 0]);

  const handleInputChange = (index, value) => {
    setInputs((prevState) =>
      prevState.map((input, i) => (i === index ? { ...input, value } : input))
    );
    setBorderRadii((prevState) =>
      prevState.map((radius, i) => (i === index ? value : radius))
    );
  };

  const borderRadius = borderRadii.join("px ") + "px";

  return (
    <div className="wrapper">
      <h1 style={{textAlign: "center"}}>Border-Radius generator by me and ChatGPT</h1>
      <div className="App">
        
        <div>
          {inputs.map((input, index) => (
            <SliderItem
              key={index}
              title={input.title}
              value={input.value}
              onInputChange={(value) => handleInputChange(index, value)}
            />
          ))}
        </div>

        <Preview borderRadius={borderRadius} />
      </div>
      <CodePreview
        topLeft={inputs[0].value}
        topRight={inputs[1].value}
        bottomRight={inputs[2].value}
        bottomLeft={inputs[3].value}
      />
    </div>
  );
}

export default App;
