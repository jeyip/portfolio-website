import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import { addDesktopLayout } from '../Utils/addLayout';
import Header from '../Shared/SectionHeader';
import Paragraph from '../Shared/Paragraph';
import SkillsSection from './SkillsSection';

import './AboutMeView.css';

const aboutMeText = `I'm an American front-end software engineer based in the beautiful beachside Ventura, CA. When not at work, you'll find me staying out way, way too late salsa dancing,
working towards competitive numbers in powerlifting, and zipping around on my cruiser.`

class AboutMeView extends Component {
  render() {
    return (
      <Flexbox className="aboutMeView">
        <Flexbox flexDirection="column">
          <Header text="ABOUT ME" />
          <Paragraph text={aboutMeText} style={{ width: '50%' }}/>
          <SkillsSection />
        </Flexbox>
      </Flexbox>
    );
  }
}

export default addDesktopLayout(AboutMeView);
