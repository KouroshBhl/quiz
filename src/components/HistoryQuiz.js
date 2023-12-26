function HistoryQuiz({ quiz, dispatch }) {
  const { personName, numOfQuestions, percentage, getTime } = quiz;
  return (
    <div className='quiz-history'>
      <h4 className='history-name'>{personName}</h4>
      <hr />
      <p>
        Number of questions: <strong>{numOfQuestions}</strong>
      </p>
      <p className='Success'>
        Success rate: <strong>{percentage}%</strong>
      </p>
      <div className='btn-review'>
        <button
          className='review'
          onClick={() => dispatch({ type: 'reviewQuiz', payload: quiz })}
        >
          Review
        </button>
      </div>
      <span className='time'>{getTime}</span>
    </div>
  );
}

export default HistoryQuiz;
