function CardQuestion({ data, type }) {
  const { category, difficulty, correct_answer } = data.question;
  return (
    <div className='card'>
      <h4
        className='question-card'
        dangerouslySetInnerHTML={{ __html: data.question.question }}
      />
      {type === 'false' && (
        <div className='selected'>
          <span className='selected-wrong'>You Selected:</span>{' '}
          <p>{data.selectedOption}</p>
        </div>
      )}
      {type === 'true' && (
        <div className='selected'>
          <p>{data.selectedOption}</p>
        </div>
      )}
    </div>
  );
}

export default CardQuestion;
