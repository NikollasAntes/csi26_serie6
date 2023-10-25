import React from 'react';
import { connect } from 'react-redux';

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        {this.props.displayValue}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  displayValue: state.displayValue,
});

export default connect(mapStateToProps)(Display);
