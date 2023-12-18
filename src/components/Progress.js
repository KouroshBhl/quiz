function Progress({ index, hasAnswered, numOfQuestions }) {
  return (
    <header className='progress'>
      <progress value={index + Number(hasAnswered)} max={numOfQuestions} />
    </header>
  );
}

export default Progress;
