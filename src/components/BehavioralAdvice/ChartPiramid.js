import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';

import {
  Animation,
  ArgumentScale,
  ValueScale,
} from '@devexpress/dx-react-chart';
import { scaleBand } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';
import { populationPyramid as data } from './data-vizualization';

const legendStyles = {
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
    width: 150,
    height: 150,
  },
};
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(2),
  },
});
const legendItemStyles = {
  item: {
    flexDirection: 'row',
  },
};

const LegendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const LegendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label {...restProps} className={classes.label} />
);
const LegendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item {...restProps} className={classes.item} />
);
const LegendRoot = withStyles(legendStyles, { name: 'LegendRoot' })(LegendRootBase);
const LegendLabel = withStyles(legendLabelStyles, { name: 'LegendLabel' })(LegendLabelBase);
const LegendItem = withStyles(legendItemStyles, { name: 'LegendItem' })(LegendItemBase);

const Label = ({ text, ...props }) => (
  <ValueAxis.Label {...props} text={`${Math.abs(text)}%`} />
);
const modifyDomain = ([start, end]) => {
  const threshold = Math.ceil(Math.max(Math.abs(start), Math.abs(end)));
  return [-threshold, threshold];
};

export default class ChartPiramid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      
        <Chart
          data={chartData}
          rotated
        >
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueScale modifyDomain={modifyDomain} />
          <ValueAxis labelComponent={Label} />

          <BarSeries
            name="Pies"
            valueField="male"
            argumentField="age"
            color="#3F7FBF"
          />
          <BarSeries
            name="Kot"
            valueField="female"
            argumentField="age"
            color="#F87CCC"
          />
          <Title text="Struktura naszych podopiecznych" />
          <Animation />
          <Legend
            position="bottom"
            rootComponent={LegendRoot}
            itemComponent={LegendItem}
            labelComponent={LegendLabel}
          />
        </Chart>
      
    );
  }
}