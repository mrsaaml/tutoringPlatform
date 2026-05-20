import { useNavigate } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import "./QuestionBank.css";

export const QuestionBank = () => {
  const nav = useNavigate();

  return (
    <>
      <Navigation />
      <section className="questionBank">
        <h2>
          <img src="./questionBank/bank.svg" alt="" /> Банк вопросов
        </h2>
        <div className="testsCover">
          <div className="testCard readingTest">
            {/* <img src="./questionBank/reading.png" alt="" /> */}
            <h3>Чтение и письмо</h3>
            <p>5 вопросов</p>
            <button onClick={()=> nav("/readingTest")}>
              Open <span>⭢</span>
            </button>
          </div>
          <div className="testCard mathTest">
            {/* <img src="./questionBank/math.png" alt="" /> */}
            <h3>Математика</h3>
            <p>5 вопросов</p>
            <button onClick={()=> nav("/mathTest")}>
              Open <span>⭢</span>
            </button>
          </div>
        </div>
        <p className="desc">
          ONEPREP и PREPPY AI являются товарными знаками или зарегистрированными
          товарными знаками OnePrep. SAT и AP являются товарными знаками или
          зарегистрированными товарными знаками College Board, а ACT является
          товарным знаком или зарегистрированным товарным знаком ACT Education
          Corp. и используются на этом сайте исключительно в целях
          идентификации. Использование SAT, AP и ACT на этом сайте не
          подразумевает каких-либо отношений или сотрудничества с College Board
          или ACT Education Corp., а также не означает их одобрения содержимого
          сайта или сервисов, предоставляемых OnePrep.
        </p>
      </section>
    </>
  );
};
