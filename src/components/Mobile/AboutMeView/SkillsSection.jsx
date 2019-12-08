import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import Header from '../../Shared/SectionHeader';
import Paragraph from '../../Shared/Paragraph';

const skillsText = `I believe deeply in the value of user-centric design.
Technology is a tool, and delight is important, but the first priority of any
website or web app should be creating the most intuitive experience possible.`

const skillData = [
  {
    title: 'Coding',
    imageUrl: '../../../Assets/codeIcon.svg',

  },
  {
    title: 'Story-Mapping',
    imageUrl: '../../../Assets/javascriptIcon.svg',
  },
];

const SkillBox = ({ data }) => (
  <Flexbox flexDirection="column">
    <img
      alt="javascriptIcon"
      style={{ height: '200px', width: 'auto' }}
      src={require('../../../Assets/codeIcon.svg')}
    />
    <h3>{data.title}</h3>
  </Flexbox>
);

class SkillsSection extends Component {
  render() {
    return (
      <Flexbox flexDirection="column" style={{ marginTop: '120px', width: '50%' }}>
        <Header text="MY SKILLS"/>
        <Flexbox justifyContent="space-between">
          {skillData.map((data) => <SkillBox data={data} key={`${data.title}-${data.imageUrl}`}/>)}
        </Flexbox>
        <Paragraph text={skillsText} /> 
      </Flexbox>
    );
  }
}

export default SkillsSection;
