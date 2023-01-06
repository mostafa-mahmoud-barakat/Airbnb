import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { BarSeries } from '@devexpress/dx-react-chart';



const data = [
  
 
  { year: '.', maxPrice: 20 },
  { year: '2', maxPrice: 20 },
  { year: '3', maxPrice: 30 },
  { year: '4', maxPrice: 80 },
  { year: '5', maxPrice: 120 },
  { year: '6', maxPrice: 160 },
  { year: '7', maxPrice: 140 },
  { year: '8', maxPrice: 200 },
  { year: '9', maxPrice: 140 },
  { year: '10', maxPrice: 130 },
  { year: '11', maxPrice: 100 },
  { year: '12', maxPrice: 50 },
  { year: '13', maxPrice: 60 },
  { year: '14', maxPrice: 50 },
  { year: '15', maxPrice: 20 },
  { year: '16', maxPrice: 20 },
  { year: '17', maxPrice: 10 },
  { year: '18', maxPrice: 5 },
  { year: '19', maxPrice: 5 },
  { year: '20', maxPrice: 10 },
  { year: '21', maxPrice: 15 },
  { year: '22', maxPrice: 10 },
  { year: '23', maxPrice: 10 },
  { year: '24', maxPrice: 5 },
  { year: '25', maxPrice: 5 },
  { year: '26', maxPrice: 10 },
  { year: '27', maxPrice: 10 },
  { year: '28', maxPrice: 20 },
  { year: '29', maxPrice: 10 },
  { year: '30', maxPrice: 10 },
  { year: '31', maxPrice: 5 },
  { year: '32', maxPrice: 5 },
  { year: '33', maxPrice: 15 },
  { year: '34', maxPrice: 5 },
  { year: '35', maxPrice: 10 },
  { year: '36', maxPrice: 10 },
  { year: '37', maxPrice: 10 },
  { year: '38', maxPrice: 10 },
  { year: '39', maxPrice: 20 },
  
];

export default class ChartModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper >
        <Chart 
          data={chartData}
          height={150}
        >
          <ArgumentAxis />
          <ValueAxis max={250} />

          <BarSeries
            valueField="maxPrice"
            argumentField="year"
            color="gray"

          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}