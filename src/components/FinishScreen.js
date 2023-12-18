import Header from './Header';
import SectionContainer from './SectionContainer';
import CardQuestion from './CardQuestion';
import Quote from './Quote';

function FinishScreen({ correctAnswers, incorrectAnswers }) {
  return (
    <div>
      <Quote />
      <SectionContainer>
        <div>
          <h3 className='card-title'>Correct answers</h3>
          {correctAnswers.map((question) => {
            return <CardQuestion data={question} type={'true'} />;
          })}
        </div>

        <div>
          <h3 className='card-title'>Wrong answers</h3>
          {incorrectAnswers.map((question) => {
            return <CardQuestion data={question} type={'false'} />;
          })}
        </div>
      </SectionContainer>
    </div>
  );
}

export default FinishScreen;
