function Button({
  children,
  onClick,
  hasAnswered,
  questions,
  correctAnswer,
  answer,
}) {
  return (
    <button
      type='button'
      className={`btn${hasAnswered ? '' : 'glow-on-hover'}${
        answer === correctAnswer ? 'btn-correct' : 'btn-incorrect'
      }`}
      dangerouslySetInnerHTML={{ __html: children }}
      onClick={onClick}
      disabled={hasAnswered}
    />
  );
}

export default Button;
