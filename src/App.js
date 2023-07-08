import React, { useContext } from "react";
import QuizContext from "./context/QuizContext";
//import { CircularProgressBar, Button, Text, Radio } from "./components";
import Home from "./containers/Home/Home";

function App() {
  const { quizState, updateQuizState } = useContext(QuizContext);
  const { quizId } = quizState;
  return (
    <>
      {quizId ? <div>Hi</div> : <Home />}
      {/* <div style={{ width: 100, height: 100 }}>
        <CircularProgressBar
          value={(1 / 2) * 100}
          pathColor="red"
          trailColor="blue"
        >
          <>
            <Text color="red" size={32} weight={300} lineHeight={1.4}>
              1/3
            </Text>
          </>
        </CircularProgressBar>
      </div>
      <div style={{ width: 320 }}>
        <Button>
          <Text color="#fff" size={16} weight={300} lineHeight={1.4}>
            Start
          </Text>
        </Button>
      </div>
      <div style={{ width: 320 }}>
        <Text color="red" size={40} weight={900} lineHeight={1.4}>
          How do you judge what should be added in the next version of the app?
        </Text>
      </div>
      <div style={{ width: 320 }}>
        <Radio isChecked>First</Radio>
      </div> */}
    </>
  );
}

export default App;
