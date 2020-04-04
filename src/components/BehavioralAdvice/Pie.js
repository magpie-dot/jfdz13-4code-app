import * as React from "react";
import {
  Chart,
  PieSeries,
  Title,
  Tooltip,
  Legend
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

import { EventTracker, HoverState } from "@devexpress/dx-react-chart";

const data = [
  { city: "Lublin", val: 40 },
  { city: "Gdańsk", val: 120 },
  { city: "Poznań", val: 60 },
  { city: "Wrocław", val: 250 },
  { city: "Warszawa", val: 80 },
  { city: "Kraków", val: 130 }
];

export default class Pie extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div>
        <Chart data={chartData}>
          <PieSeries valueField="val" argumentField="city" innerRadius={0.4} />
          <Title text="Zwierzaki adoptowane w polskich miastach" />
          <Legend />
          <Animation />
          <EventTracker />
          <HoverState />
          <Tooltip />
        </Chart>
      </div>
    );
  }
}
