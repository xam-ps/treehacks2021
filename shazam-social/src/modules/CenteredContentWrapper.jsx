import React from 'react';
import styles from './CenteredContentWrapper.module.scss';

class CenteredContentWrapper extends React.Component {
  static defaultProps = {
    maxWidth: 720,
    fullscreen: false
  };

  render() {
    let heightVal = 'auto';
    if(this.props.fullscreen){
      heightVal = 'calc(100% - 16px)'
    }

    const centeredMaxWith = {
      maxWidth: this.props.maxWidth,
    };

    const fullHeight = {
      height: heightVal
    }

    return (
      <div className={styles.centered} style={fullHeight}>
        <div style={{...centeredMaxWith, ...fullHeight}}>{this.props.children}</div>
      </div>
    );
  }
}
export default CenteredContentWrapper;