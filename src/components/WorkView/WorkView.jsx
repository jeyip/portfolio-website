import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import { addDesktopLayout } from '../Utils/addLayout';
import Header from '../Shared/SectionHeader';
import WorkTile from './WorkTile.jsx';

import './workView.css';

const workData = [
  {
    title: 'Placeholder',
    imageUrl: '',
    id: 1,
  },
  {
    title: 'Placeholder',
    imageUrl: '',
    id: 2,    
  },
  {
    title: 'Placeholder',
    imageUrl: '',
    id: 3,

  },
  {
    title: 'Placeholder',
    imageUrl: '',
    id: 4,

  },
  {
    title: 'Placeholder',
    imageUrl: '',
    id: 5,

  },
  {
    title: 'Placeholder',
    imageUrl: '',
    id: 6,

  },
]

class WorkView extends Component {
  render() {
    return (
      <Flexbox
        justifyContent="center"
        className="workViewContainer"
        flexDirection="column"
      >
        <Header text="WORK"/>
        <Flexbox flexWrap="wrap" justifyContent="space-between">
          {workData.map((data) => <WorkTile data={data} key={data.id}/>)}
        </Flexbox>
      </Flexbox>
    );
  }
}

export default addDesktopLayout(WorkView);
