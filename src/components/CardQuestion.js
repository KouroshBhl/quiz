function CardQuestion({ data, type }) {
  const { category, difficulty, correct_answer } = data.question;
  return (
    <div className='card'>
      <div className='card-info'>
        <span dangerouslySetInnerHTML={{ __html: category }} />
        <span>#{difficulty}</span>
      </div>
      <h4
        className='question-card'
        dangerouslySetInnerHTML={{ __html: data.question.question }}
      />
      {type === 'false' && (
        <>
          <div className='selected'>
            <span className='selected-wrong'>You Selected:</span>
            <p dangerouslySetInnerHTML={{ __html: data.selectedOption }} />
          </div>

          <div className='selected'>
            <span className='selected-correct'>Correct Answer:</span>
            <p dangerouslySetInnerHTML={{ __html: correct_answer }} />
          </div>
        </>
      )}
      {type === 'true' && (
        <div className='selected'>
          <p dangerouslySetInnerHTML={{ __html: data.selectedOption }} />
        </div>
      )}
    </div>
  );
}

export default CardQuestion;
