import Options from './Options';
import SectionContainer from './SectionContainer';
import NextButton from './NextButton';
import QuestionFooter from './QuestionFooter';
import Timer from './Timer';

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
  return (
    <div>
      <SectionContainer>
        <progress className='progress' value={index} max={numOfQuestions} />
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
          {hasAnswered && (
            <NextButton onClick={() => dispatch({ type: 'nextQuestion' })} />
          )}
        </QuestionFooter>
      </SectionContainer>
    </div>
  );
}

export default Question;
