import { useEffect, useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    const total = good + neutral + bad;
    setTotalCount(total);
    setPositivePercentage(((good / total) * 100).toFixed());
  }, [good, bad, neutral]);

  function onLeaveFeedback(val) {
    if (val === 'good') {
      setGood(prev => prev + 1);
    } else if (val === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (val === 'bad') {
      setBad(prev => prev + 1);
    }
  }
  return (
    <div className="wrapper">
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {totalCount === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
