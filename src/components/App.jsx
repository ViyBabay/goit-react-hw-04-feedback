import React, { useState } from 'react';
import { Section } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './NotificationMes/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = nameFeedback => {
    if (nameFeedback === 'good') {
      setGood(prev => prev + 1);
    } else if (nameFeedback === 'neutral') {
      setNeutral(prev => prev + 1);
    } else {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed();
  };

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positive={positive}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}
