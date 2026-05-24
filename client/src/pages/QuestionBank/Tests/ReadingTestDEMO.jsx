// import { useTranslation } from "react-i18next";
// import { Navigation } from "../../../components/Navigation/Navigation";
// import "./Tests.css";
// import { useState } from "react";

// const questions = [
//   {
//     id: 1,
//     text: "When investigating the link between glacial melt and rising sea levels, scientists often require advanced equipment...",
//     options: ["levels and", "levels,", "levels", "levels, and"],
//     answer: "levels,",
//   },
//   {
//     id: 2,
//     text: "When consumed as a trace component of drinking water, selenium has beneficial effects... These facts are ____ important to ecological chemist Karen Jenni.",
//     options: [
//       "important to:",
//       "important to",
//       "important: to",
//       "important to;",
//     ],
//     answer: "important to",
//   },
//   {
//     id: 3,
//     text: "New research on giant kelp has revealed that this underwater plant can adapt to nutrient shortages... kelp thrives on two ____ and treats them as interchangeable.",
//     options: [
//       "nutrients, urea, and ammonium",
//       "nutrientsm uream and ammonium",
//       "nutrients urea and ammonium",
//       "Nutrients, urea and ammonium",
//     ],
//     answer: "nutrients urea and ammonium",
//   },
//   {
//     id: 4,
//     text: "Medical practitioners during the Middle Ages believed emotions were explained by substances known ____ both then and now.",
//     options: [
//       "known, both then and now,",
//       "known both the and now,",
//       "known both then, and now,",
//       "known, both then and now",
//     ],
//     answer: "known, both then and now,",
//   },
//   {
//     id: 5,
//     text: "Polynesian and Micronesian navigators used stick ____ that provided information about islands and ocean currents.",
//     options: [
//       "charts, map-like constructions:",
//       "charts map-like constructions,",
//       "charts, map-like constructions",
//       "charts map-like constructions",
//     ],
//     answer: "charts, map-like constructions",
//   },
// ];

// export const ReadingTest = () => {
//   const { t } = useTranslation();

//   const [selected, setSelected] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [result, setResult] = useState(0);
//   const [openModal, setOpenModal] = useState(false);

//   const choose = (qId, option) => {
//     if (submitted) return; // нельзя менять после submit

//     setSelected((prev) => ({
//       ...prev,
//       [qId]: option,
//     }));
//   };

//   const allAnswered = questions.every((q) => selected[q.id]);

//   const submit = () => {
//     if (!allAnswered) return;

//     let score = 0;

//     questions.forEach((q) => {
//       if (selected[q.id] === q.answer) {
//         score++;
//       }
//     });

//     setResult(score);
//     setSubmitted(true);
//     setOpenModal(true);
//   };

//   const closeModal = () => {
//     setOpenModal(false);
//     setSelected({});
//     setSubmitted(false);
//     setResult(0);
//   };
//   const getResultColor = () => {
//     if (result <= 2) return "bad";
//     if (result === 3 || result === 4) return "medium";
//     return "good";
//   };

//   return (
//     <>
//       <Navigation />

//       <section className="mathTestPage">
//         <h2>SAT Verbal</h2>

//         <div className="testWrapper">
//           {questions.map((q) => (
//             <div
//               key={q.id}
//               className={`questionCard ${
//                 submitted && selected[q.id] === q.answer
//                   ? "correct"
//                   : submitted
//                     ? "wrong"
//                     : ""
//               }`}
//             >
//               <p className="questionText">
//                 {q.id}. {q.text}
//               </p>

//               <div className="options">
//                 {q.options.map((opt) => (
//                   <button
//                     key={opt}
//                     onClick={() => choose(q.id, opt)}
//                     className={`optionBtn ${
//                       selected[q.id] === opt ? "active" : ""
//                     } ${submitted && opt === q.answer ? "showCorrect" : ""}`}
//                   >
//                     {opt}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           className={`submitBtn ${!allAnswered ? "disabled" : ""}`}
//           onClick={submit}
//           disabled={!allAnswered}
//         >
//           {t("mathTest.submit")}
//         </button>
//       </section>

//       {/* MODAL */}
//       {openModal && (
//         <div className="modalOverlay" onClick={closeModal}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <h3>{t("mathTest.result")}</h3>

//             <div className={`resultScore ${getResultColor()}`}>
//               {result} / {questions.length}
//             </div>

//             <p className="resultText">
//               {result <= 2 && t("mathTest.tryAgain")}
//               {result === 3 || result === 4 ? t("mathTest.notBad") : ""}
//               {result === 5 ? t("mathTest.great") : ""}
//             </p>

//             <button onClick={closeModal}>{t("mathTest.close")}</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
