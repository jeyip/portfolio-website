import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import './footer.css';

const layoutStyles = {
  backgroundColor: '#48BDBE',
};

class Footer extends Component {
  render() {
    const { styles } = this.props;

    return (
      <Flexbox
        alignItems="center"
        justifyContent="center"
        style={styles.footer}
      >
        <a href="https://www.github.com/jeyip" style={styles.link}>
          <Flexbox
            alignItems="center"
            className="mobileFooter__iconContainer"
            justifyContent="center"
          >
            <i
              className="fa fa-github-alt mobileFooter__githubIcon"
              aria-hidden="true"
            />
          </Flexbox>
        </a>
        <a href="https://www.linkedin.com/in/jeremy-yip" style={styles.link}>
          <Flexbox
            alignItems="center"
            className="mobileFooter__iconContainer"
            justifyContent="center"
          >
            <i
              className="fa fa-linkedin mobileFooter__linkedinIcon"
              aria-hidden="true"
            />
          </Flexbox>
        </a>
        <a href="https://medium.com/@jeremy.yip7" style={styles.link}>
          <Flexbox
            alignItems="center"
            className="mobileFooter__iconContainer"
            justifyContent="center"
          >
            <i
              className="fa fa-medium mobileFooter__mediumIcon"
              aria-hidden="true"
            />
          </Flexbox>
        </a>
      </Flexbox>
    );
  }
}

Footer.defaultProps = {
  styles: {
    header: { color: '#FFF', fontSize: '18px' },
    paragraph: { color: '#FFF' },
    footer: {
      backgroundColor: '#48BDBE',
      height: '10vh'
    },
    link: { margin: '0px 15px' }
  }
}

export default Footer;
