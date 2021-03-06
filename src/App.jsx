import React from 'react';
import SimpleMap from './components/GoogleMap';
import DistrictList from './components/DistrictList';


export default class App extends React.Component {
  render() {
    return (
      <div className="outer">
        <SimpleMap />
        <DistrictList />
      </div>
    );
  }
}
