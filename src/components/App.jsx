import React, { Component } from 'react';
import { Section } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './NotificationMes/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = nameFeedback => {
    this.setState(objectState => {
      return {
        [nameFeedback]: objectState[nameFeedback] + 1,
      };
    });
  };

  // handleGood = () => {
  //   this.setState(
  //     prevState => ({ good: prevState.good + 1 }),
  //     () => console.log(this.state.good)
  //   );
  // };

  // handleNeutral = () => {
  //   this.setState(
  //     prevState => ({ neutral: prevState.neutral + 1 }),
  //     () => console.log(this.state.neutral)
  //   );
  // };

  // handleBad = () => {
  //   this.setState(
  //     prevState => ({ bad: prevState.bad + 1 }),
  //     () => console.log(this.state.bad)
  //   );
  // };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
