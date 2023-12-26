import SectionContainer from './SectionContainer';
import HistoryQuiz from './HistoryQuiz';

function PreviousQuiz({ localStorage, dispatch }) {
  return (
    <SectionContainer>
      <h2>Quiz History</h2>

      <div className='history-container'>
        {localStorage.map((quiz) => {
          return (
            <HistoryQuiz quiz={quiz} dispatch={dispatch} key={quiz.getTime} />
          );
        })}
      </div>
    </SectionContainer>
  );
}

export default PreviousQuiz;
