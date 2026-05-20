import { DesmosCalculator } from "../../../components/DesmosCalculator";
import { Navigation } from "../../../components/Navigation/Navigation";
import "./Tests.css";
import { useState } from "react";

const questions = [
  {
    id: 1,
    text: "A commuter uses a pre-paid card. After how many trips will balance be $25?",
    options: ["4", "20", "24", "28"],
    answer: "20",
  },
  {
    id: 2,
    text: "A florist has 225 flowers. What is f?",
    options: ["15", "210", "240", "3375"],
    answer: "210",
  },
  {
    id: 3,
    text: "Equivalent equation to 4(x + 15) = 220?",
    options: ["x+15=880", "x+15=55", "x+15=216", "x+15=40"],
    answer: "x+15=55",
  },
  {
    id: 4,
    text: "Yoga vs Pilates classes question",
    options: ["284", "458", "742", "1200"],
    answer: "284",
  },
  {
    id: 5,
    text: "Which equation represents total cost?",
    options: ["25m+55=330", "25m-55=330", "25+55m=330", "25-55m=330"],
    answer: "25m+55=330",
  },
];

export const MathTest = () => {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const choose = (qId, option) => {
    if (submitted) return; // нельзя менять после submit

    setSelected((prev) => ({
      ...prev,
      [qId]: option,
    }));
  };

  const allAnswered = questions.every((q) => selected[q.id]);

  const submit = () => {
    if (!allAnswered) return;

    let score = 0;

    questions.forEach((q) => {
      if (selected[q.id] === q.answer) {
        score++;
      }
    });

    setResult(score);
    setSubmitted(true);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelected({});
    setSubmitted(false);
    setResult(0);
  };
  const getResultColor = () => {
    if (result <= 2) return "bad";
    if (result === 3 || result === 4) return "medium";
    return "good";
  };

  return (
    <>
      <Navigation />
<section className="mathTestPage">
  <h2>SAT Math</h2>

  <div className="flexbox">
    <div className="left">
      <DesmosCalculator />
    </div>

    <div className="right">
      <div className="testWrapper">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`questionCard ${
              submitted && selected[q.id] === q.answer
                ? "correct"
                : submitted
                  ? "wrong"
                  : ""
            }`}
          >
            <p className="questionText">
              {q.id}. {q.text}
            </p>

            <div className="options">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => choose(q.id, opt)}
                  className={`optionBtn ${
                    selected[q.id] === opt ? "active" : ""
                  } ${submitted && opt === q.answer ? "showCorrect" : ""}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          className={`submitBtn ${!allAnswered ? "disabled" : ""}`}
          onClick={submit}
          disabled={!allAnswered}
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</section>


      {/* MODAL */}
      {openModal && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Результат</h3>

            <div className={`resultScore ${getResultColor()}`}>
              {result} / {questions.length}
            </div>

            <p className="resultText">
              {result <= 2 && "Попробуй ещё раз"}
              {result === 3 || result === 4 ? "Неплохо" : ""}
              {result === 5 ? "Отличный результат" : ""}
            </p>

            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
};
