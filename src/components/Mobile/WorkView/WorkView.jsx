import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import { addMobileLayout } from '../../Utils/addLayout';
import Header from '../../Shared/SectionHeader';
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
]

class WorkView extends Component {
  render() {
    return (
      <Flexbox
        justifyContent="flex-start"
        className="mobileWorkViewContainer"
        flexDirection="column"
      >
        <Header text="WORK" style={{ paddingTop: '15px' }}/>
        <Flexbox flexDirection="column" justifyContent="center" style={{ height: '70vh' }}>
          {workData.map((data) => <WorkTile data={data} key={data.id}/>)}
        </Flexbox>
      </Flexbox>
    );
  }
}

export default addMobileLayout(WorkView);
