import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback, children }) => {
  return (
    <>
      {options.map(item => (
        <button
          key={item}
          className={style.button}
          name={item}
          onClick={() => onLeaveFeedback(item)}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </>
  );
};
