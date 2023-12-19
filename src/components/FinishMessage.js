import SectionContainer from './SectionContainer';

function FinishMessage({ percentage }) {
  let message, classOption;
  if (percentage === 100) {
    classOption = '#86efac';
    message = `Congratulations! You answered all questions correctly ${percentage}%}🥇`;
  }
  if (percentage >= 70 && percentage < 100) {
    classOption = '#86efac';
    message = `Amazing! You answered ${percentage}% of questions correctly 🎉`;
  }
  if (percentage >= 50 && percentage < 70) {
    classOption = '#86efac';
    message = `Great! You answered ${percentage}% of questions correctly 🙋‍♀️`;
  }
  if (percentage >= 30 && percentage < 50) {
    classOption = '#fb7185';
    message = `You answered ${percentage}% of questions correctly, keep studying! 🙂`;
  }
  if (percentage > 0 && percentage < 30) {
    classOption = '#fb7185';
    message = `Ops! You answered ${percentage}% of questions correctly, keep studying! 😟`;
  }
  if (percentage === 0) {
    classOption = '#fb7185';
    message =
      'Oh no! You did not answered any questions correctly! Study more...! 😢';
  }

  return (
    <SectionContainer>
      <h1 className='final-message' style={{ color: classOption }}>
        {message}
      </h1>
    </SectionContainer>
  );
}

export default FinishMessage;
