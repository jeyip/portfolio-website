import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import { addMobileLayout } from '../../Utils/addLayout';
import Header from '../../Shared/SectionHeader';
import Paragraph from '../../Shared/Paragraph';
import SkillsSection from './SkillsSection';

import './AboutMeView.css';

const aboutMeText = `I'm an American front-end software engineer based in the beautiful beachside Ventura, CA. When not at work, you'll find me staying out way, way too late salsa dancing,
working towards competitive numbers in powerlifting, and zipping around on my cruiser.`

class AboutMeView extends Component {
  render() {
    return (
      <Flexbox
        alignItems="center"
        className="aboutMeView"
        flexDirection="column"
      >
        <Flexbox alignSelf="flex-start">
          <Header text="ABOUT ME" />
        </Flexbox>
        <Paragraph text={aboutMeText}/>
        {/* <SkillsSection /> */}
      </Flexbox>
    );
  }
}

export default addMobileLayout(AboutMeView);
