import React, { useState } from 'react';
import './PostQuestionsPage.css'

const Question = ({ key, questionText, answerOptions, onChange, questionSets }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  // const questions = [
  //   {
  //     id: "FPEB1",
  //     text: "In the future, I will adequately complete assigned duties in environmentally friendly ways.",
  //   },
  //   {
  //     id: "FPEB2",
  //     text: "In the future, I will fulfill responsibilities specified in my job description in environmentally-friendly ways.",
  //   },
  //   {
  //     id: "FPEB3",
  //     text: "In the future, I will perform tasks that are expected of me in environmentally-friendly ways.",
  //   },
  //   {
  //     id: "FPEB4",
  //     text: "In the future, I will take a chance to get actively involved in environmental protection at work.",
  //   },
  //   {
  //     id: "FPEB5",
  //     text: "In the future, I will take initiative to act in environmentally-friendly ways at work.",
  //   },
  //   {
  //     id: "FPEB6",
  //     text: "In the future, I will do more for the environment at work than I was expected to.",
  //   },
  // ];
  // const [responses, setResponses] = useState(
  //   questions.reduce((acc, q) => ({ ...acc, [q.id]: "" }), {})
  // );

  // const handleChange = (event) => {
  //   setResponses({
  //     ...responses,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  

  return (
    <div className="questions-page">

    <div className="mcq-container">
      {/* <div className="mcq-question">
        <p>Please think back to how you have felt during the past 24 hours. Using the 0-4 scale below to indicate how much you experienced each of the following statements.</p>
        <div className="mcq-agreement">
          <p>1 - Strongly disagree</p>
          <p>2 - Disagree</p>
          <p>3 - Somewhat disagree</p>
          <p>4 - Neither agree or disagree</p>
          <p>5 - Somewhat agree</p>
          <p>6 - Agree</p>
          <p>7 - Strongly agree</p>
        </div>
      </div> */}
      {/* {questions.map((q) => ( */}
        <div key={key} className="mcq-question">
          <p>{questionText}</p>
          <div className="mcq-response">
          {answerOptions.map((option, index) => (
              <label key={index}>
                <input type="radio" value={option.value} checked={selectedValue === option.value} onChange={handleOptionChange} />
                {option.label}
              </label>
            ))}
          </div>
          {/* <div className="mcq-response">
            <label>
              <input type="radio" value="1" checked={selectedValue === "1"} onChange={handleOptionChange} />
              Strongly disagree
            </label>
            <label>
              <input type="radio" value="2" checked={selectedValue === "2"} onChange={handleOptionChange} />
              Disagree
            </label>
            <label>
              <input type="radio" value="3" checked={selectedValue === "3"} onChange={handleOptionChange} />
              Somewhat disagree
            </label>
            <label>
              <input type="radio" value="4" checked={selectedValue === "4"} onChange={handleOptionChange} />
              Neither agree or disagree
            </label>
            <label>
              <input type="radio" value="5" checked={selectedValue === "5"} onChange={handleOptionChange} />
              Somewhat agree
            </label>
            <label>
              <input type="radio" value="6" checked={selectedValue === "6"} onChange={handleOptionChange} />
              Agree
            </label>
            <label>
              <input type="radio" value="7" checked={selectedValue === "7"} onChange={handleOptionChange} />
              Strongly agree
            </label>
          </div> */}
        </div>
        {/* ))} */}
      </div>
      
      <div className="question-container">
        
        {/* <h2 className="question-title">
          {questionText}</h2> */}
          {/* <div className="answer-options"> */}
            {/* <label>
              <input type="radio" value="1" checked={selectedValue === "1"} onChange={handleOptionChange} />
              Strongly disagree
            </label>
            <label>
              <input type="radio" value="2" checked={selectedValue === "2"} onChange={handleOptionChange} />
              Disagree
            </label>
            <label>
              <input type="radio" value="3" checked={selectedValue === "3"} onChange={handleOptionChange} />
              Somewhat disagree
            </label>
            <label>
              <input type="radio" value="4" checked={selectedValue === "4"} onChange={handleOptionChange} />
              Neither agree or disagree
            </label>
            <label>
              <input type="radio" value="5" checked={selectedValue === "5"} onChange={handleOptionChange} />
              Somewhat agree
            </label>
            <label>
              <input type="radio" value="6" checked={selectedValue === "6"} onChange={handleOptionChange} />
              Agree
            </label>
            <label>
              <input type="radio" value="7" checked={selectedValue === "7"} onChange={handleOptionChange} />
              Strongly agree
            </label> */}
            {/* {answerOptions.map((option, index) => (
              <label key={index}>
                <input type="radio" value={option.value} checked={selectedValue === option.value} onChange={handleOptionChange} />
                {option.label}
              </label>
            ))} */}
          {/* </div> */}
      </div>
    
    </div>
    // <div className="questions-page">
    //   <div className="mcq-container">
    //     {questionSets.map((questionSet) => (
    //       <div key={questionSet.QsetID} className="mcq-question">
    //         <p>{questionSet.introText}</p>
    //         <div className="mcq-agreement">
    //           {questionSet.agreementOptions.map((option) => (
    //             <p key={option}>{option}</p>
    //           ))}
    //         </div>
    //         <p>{questionSet.text}</p>
    //         <div className="mcq-response">
    //           {questionSet.answerOptions.map((option) => (
    //             <label key={option.value}>
    //               <input
    //                 type="radio"
    //                 value={option.value}
    //                 checked={selectedValues[questionSet.id] === option.value}
    //                 onChange={() => handleOptionChange(questionSet.id, option.value)}
    //               />
    //               {option.label}
    //             </label>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="question-container"></div>
    // </div>
  );
};

export default Question;
