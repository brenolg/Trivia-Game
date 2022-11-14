import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends React.Component {
  handleFeedbackMessage = () => {
    const three = 3;
    const { assertions } = this.props;
    if (assertions < three) {
      return 'Could be better...';
    }
    if (assertions >= three) {
      return 'Well Done!';
    }
  };

  render() {
    const { score, assertions } = this.props;
    return (
      <>
        <Header />
        <h1>Feedback</h1>
        <h2 data-testid="feedback-text">{ this.handleFeedbackMessage() }</h2>
        <h3 data-testid="feedback-total-score">{score}</h3>
        <h3 data-testid="feedback-total-question">{assertions}</h3>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
