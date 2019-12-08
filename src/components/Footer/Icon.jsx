import React from 'react';
import Flexbox from 'flexbox-react';

import './footer.css';

const iconToClassMap = {
  github: 'fa fa-github-alt footer__githubIcon',
  linkedIn: 'fa fa-linkedin footer__linkedinIcon',
  medium: 'fa fa-medium footer__mediumIcon',
}

const Icon = ({ icon, link, styles }) => (
  <a href={link} style={styles.link}>
    <Flexbox
      alignItems="center"
      className="footer__iconContainer"
      justifyContent="center"
    >
      <i
        className={iconToClassMap[icon]}
        aria-hidden="true"
      />
    </Flexbox>
  </a>
)

export default Icon;
