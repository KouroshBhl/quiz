import SectionContainer from './SectionContainer';
import HistoryQuiz from './HistoryQuiz';

function PreviousQuiz({ localStorage, dispatch }) {
  return (
    <SectionContainer>
      <div className='history-header'>
        <h2>Quiz History</h2>
        <button
          className='btn-remove-all'
          onClick={() => dispatch({ type: 'clearAllHistory' })}
        >
          Clear All
        </button>
      </div>
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
