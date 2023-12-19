import { BiError } from 'react-icons/bi';
import SectionContainer from './SectionContainer';
import RestartButton from './RestartButton';

function Error({ error, dispatch }) {
  console.log(error);
  return (
    <SectionContainer>
      <section>
        <h1>Something went wrong...!</h1>
        <div className='error-section'>
          <BiError />
          <div className='error-messages'>
            {error.msg && <h2>Dev: {error.msg}</h2>}
            {error.error && <h2>Compiler: {error.error}</h2>}
          </div>
        </div>
      </section>
      <RestartButton
        onClick={() => dispatch({ type: 'resetQuiz' })}
        text={'TRY AGAIN!'}
      />
    </SectionContainer>
  );
}
export default Error;
