import { createContext, useState } from "react";

export const AnswerCount = createContext();

const AnswerCountProvider = (props) => {
  const [answerCount, setAnswerCount] = useState(0);
  console.log(answerCount);

  return (
    <AnswerCount.Provider value={{ answerCount, setAnswerCount }}>
      {props.children}
    </AnswerCount.Provider>
  );
};

export default AnswerCountProvider;
