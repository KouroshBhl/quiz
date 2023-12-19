import Options from './Options';
import SectionContainer from './SectionContainer';
import NextButton from './NextButton';
import QuestionFooter from './QuestionFooter';
import Timer from './Timer';
import Progress from './Progress';

function Question({
  numOfQuestions,
  dispatch,
  questions,
  index,
  hasAnswered,
  randomAnswers,
  incorrectAnswers,
  correctAnswers,
}) {
  const percentage = Math.floor((correctAnswers.length / numOfQuestions) * 100);

  return (
    <div>
      <SectionContainer>
        <Progress
          index={index}
          hasAnswered={hasAnswered}
          numOfQuestions={numOfQuestions}
        />
        <Options
          questionInfo={questions[index]}
          dispatch={dispatch}
          hasAnswered={hasAnswered}
          questions={questions[index]}
          randomAnswers={randomAnswers}
          index={index}
          numOfQuestions={numOfQuestions}
          incorrectAnswers={incorrectAnswers}
          correctAnswers={correctAnswers}
        />

        <QuestionFooter>
          <Timer />
          {hasAnswered && index + 1 < numOfQuestions && (
            <NextButton
              onClick={() => dispatch({ type: 'nextQuestion' })}
              type={'NEXT'}
            />
          )}
          {numOfQuestions === index + 1 && (
            <NextButton
              type={'FINISH'}
              onClick={() =>
                dispatch({ type: 'quizFinished', payload: Number(percentage) })
              }
            />
          )}
        </QuestionFooter>
      </SectionContainer>
    </div>
  );
}

export default Question;
