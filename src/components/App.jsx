import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = val => {
    this.setState(prev => {
      return { [val]: prev[val] + 1 };
    });
  };
  countTotalFeedback = () => {
    const totalVal = Object.values(this.state).reduce((ac, el) => {
      return ac + el;
    }, 0);
    return totalVal;
  };
  countPositiveFeedbackPercentage = total => {
    return ((this.state.good / total) * 100).toFixed();
  };
  render() {
    let totalCount = this.countTotalFeedback();
    let positivePercentage = this.countPositiveFeedbackPercentage(totalCount);
    return (
      <div className="wrapper">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title="Statistics">
          {totalCount === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalCount}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
