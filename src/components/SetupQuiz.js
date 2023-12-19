function SetupQuiz({ dispatch, categories, numOfQuestions }) {
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'startQuiz' });
  }

  return (
    <section className='setup-quiz'>
      <form action='submit' className='form-quiz' onSubmit={handleSubmit}>
        <div className='divide-quiz'>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            defaultValue={'Zana Koljic'}
            onChange={(e) =>
              dispatch({
                type: 'getName',
                payload: e.target.value,
              })
            }
          />
        </div>

        <div className='divide-quiz'>
          <label htmlFor='num-questions'>Number of questions</label>
          <input
            type='number'
            id='num-questions'
            defaultValue={numOfQuestions}
            onChange={(e) =>
              dispatch({
                type: 'getQuestionNumbers',
                payload: Number(e.target.value),
              })
            }
          />
        </div>
        <div className='divide-quiz'>
          <label htmlFor='category'>Select category</label>
          <select
            name='category'
            id='category'
            onChange={(e) =>
              dispatch({
                type: 'getCategorySelected',
                payload: Number(e.target.value),
              })
            }
          >
            <option value=''>Random Category</option>
            {categories.map((cat) => {
              return (
                <option value={cat.id} key={cat.id}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className='divide-quiz'>
          <label htmlFor='difficulty'>Select Difficulty</label>
          <select
            name='difficulty'
            id='difficulty'
            onChange={(e) =>
              dispatch({
                type: 'getDifficultySelected',
                payload: e.target.value,
              })
            }
          >
            <option value=''>Random Difficulty</option>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>
        <div className='divide-quiz'>
          <label htmlFor='category'>Select type</label>
          <select
            name='type'
            id='type'
            onChange={(e) =>
              dispatch({ type: 'getTypeSelected', payload: e.target.value })
            }
          >
            <option value='random'>Random Type</option>
            <option value='multiple'>Multiple Choice</option>
            <option value='boolean'>True / False</option>
          </select>
        </div>

        <button className='btn glow-on-hover'>Start Quiz 🏁</button>
      </form>
    </section>
  );
}

export default SetupQuiz;
