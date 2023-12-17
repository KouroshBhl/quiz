import { FaCircleQuestion } from 'react-icons/fa6';
import { MdCategory } from 'react-icons/md';
import { SiLevelsdotfyi } from 'react-icons/si';
import { MdScore } from 'react-icons/md';
import Answers from './Answers';

function Options({
  questionInfo,
  dispatch,
  hasAnswered,
  questions,
  randomAnswers,
  numOfQuestions,
  index,
  correctAnswers,
  incorrectAnswers,
}) {
  const { category, difficulty, question } = questionInfo;

  return (
    <div className='option'>
      <div className='question-info'>
        <p className='detail-info'>
          <FaCircleQuestion />
          <strong>
            Question {index + 1} / {numOfQuestions}
          </strong>
        </p>
        <p className='detail-info'>
          {/* <MdScore /> */}
          <strong>
            🟢 {correctAnswers.length} / 🔴 {incorrectAnswers.length}
          </strong>
        </p>

        <p className='detail-info'>
          <MdCategory />
          <span
            className='info-category'
            dangerouslySetInnerHTML={{ __html: category }}
          />
        </p>
        <p className='detail-info'>
          <SiLevelsdotfyi />

          <span className='info-difficulty'>{difficulty}</span>
        </p>
      </div>

      <div className='question'>
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
      </div>

      <div className='answers'>
        {/* <Button answers={answers} /> */}
        {randomAnswers.map((answer) => {
          return (
            <Answers
              answer={answer}
              key={answer}
              dispatch={dispatch}
              hasAnswered={hasAnswered}
              questions={questions}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Options;
