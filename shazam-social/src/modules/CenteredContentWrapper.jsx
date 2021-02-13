import React from 'react';
import styles from './CenteredContentWrapper.module.scss';

class CenteredContentWrapper extends React.Component {
  static defaultProps = {
    maxWidth: 720,
  };

  render() {
    const centeredMaxWith = {
      maxWidth: this.props.maxWidth,
    };

    return (
      <div className={styles.centered}>
        <div style={centeredMaxWith}>{this.props.children}</div>
      </div>
    );
  }
}
export default CenteredContentWrapper;