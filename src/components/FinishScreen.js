import SectionContainer from './SectionContainer';
import CardQuestion from './CardQuestion';
import Quote from './Quote';
import FinishMessage from './FinishMessage';
import RestartButton from './RestartButton';

function FinishScreen({
  correctAnswers,
  incorrectAnswers,
  quote,
  dispatch,
  percentage,
  isQuoteError,
}) {
  const wrongPercentage = 100 - percentage;
  return (
    <div>
      <FinishMessage percentage={percentage} />
      {!isQuoteError && <Quote quote={quote} dispatch={dispatch} />}
      <SectionContainer>
        {correctAnswers.length > 0 && (
          <div>
            <h3 className='card-title'>
              Correct answers{' '}
              <span className='percentage-message'>({percentage}%)</span>
            </h3>
            {correctAnswers.map((question, id) => {
              return <CardQuestion data={question} type={'true'} key={id} />;
            })}
          </div>
        )}
        {correctAnswers.length === 0 && (
          <div className='no-correct'>
            <h3>Whoops! you do not have any correct answer!</h3>
          </div>
        )}

        <div>
          <h3 className='card-title'>
            Wrong answers{' '}
            <span className='percentage-message'>({wrongPercentage}%)</span>
          </h3>
          {incorrectAnswers.map((question) => {
            return (
              <CardQuestion
                data={question}
                type={'false'}
                key={question.selectedOption}
              />
            );
          })}
        </div>
        <RestartButton
          onClick={() => dispatch({ type: 'resetQuiz' })}
          text={'RESTART QUIZ!'}
        />
      </SectionContainer>
    </div>
  );
}

export default FinishScreen;
