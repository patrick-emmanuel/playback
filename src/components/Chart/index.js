import React from 'react';
import ChartBanner from './ChartBanner';
import Card from './Card';
import Grid from '../Grid';

const Chart = ({ tracks }) => (
  <div>
    <ChartBanner data={tracks.data.find(data => data.position === 1)} />
    <Grid>
      {tracks.data.map(track => <Card key={track.id} track={track} />)}
    </Grid>
  </div>
);

export default Chart;
