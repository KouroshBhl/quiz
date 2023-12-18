function Answers({ answer, dispatch, hasAnswered, questions }) {
  function handleClicked() {
    if (hasAnswered) return;
    dispatch({ type: 'checkAnswer', payload: answer });
  }

  return (
    <button
      className={`btn ${
        hasAnswered
          ? answer === questions.correct_answer
            ? 'btn-correct'
            : 'btn-incorrect'
          : ''
      }`}
      onClick={handleClicked}
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  );
}

export default Answers;
