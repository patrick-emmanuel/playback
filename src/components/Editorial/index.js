import React, { Component } from 'react';
import Grid from '../Grid';
import EditorialCard from './EditorialCard';
import EditorialBanner from './EditorialBanner';

class Editorial extends Component {
  //generateRandomInt = max => Math.floor(Math.random() * Math.floor(max));
  removeCategory = editorial =>
    editorial.data.filter(category => category.name !== 'ALL');
  render() {
    const { editorial } = this.props;
    //const randomEditorialIndex = this.generateRandomInt(editorial.data.length);
    const restCategory = editorial.data.filter(
      (category) => category.id !== 2 //Filter out 'African music' to use as banner image.
    );
    function renderBanner() {
      const bannerCategory = editorial.data.find(category => category.id === 2);//find and render african music as banner.
      return <EditorialBanner data={bannerCategory} />;
    }
    return (
      <div>
        {renderBanner()}
        <Grid>
          {restCategory.map(category => (
            <EditorialCard key={category.id} data={category} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default Editorial;
