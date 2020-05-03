import React, { PureComponent } from "react";
import { PieChart, Pie, Sector } from "recharts";

//const data = [
 // { name: "Gdańsk", value: 730 },
 // { name: "Warszawa", value: 330 },
 // { name: "Łódź", value: 287 },
 // { name: "Wrocław", value: 160 },
//  { name: "Szczecin", value: 60 },
 // { name: "Kraków", value: 860 },
//  { name: "Wolbórz", value: 60 },
//];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 18;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"rgb(234,76,137)"}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 8}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Adopcje: ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 8}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="rgb(234,76,137)"
      >
        {`(${(percent * 100).toFixed(2)}% )`}
      </text>
    </g>
  );
};

export default class Chart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/hqnrgxpj/";

  state = {
  activeIndex: 0,
  data: []
  };

  

  componentDidMount() {
    this.fetchData();
}

fetchData = () => { 
    fetch('https://code-for-animals-90802.firebaseio.com/data.json')
    .then(res => res.json())
    .then(objectData => {
      const keys = Object.keys(objectData);
      const arrayData = keys.map(key => {
        return {
          id: key,
          ...objectData[key]
        }
      })
      
       
      
      this.setState({
       data: arrayData,
    activeIndex: this.state.activeIndex
      })
    })
  }

  //

  render() {
    return (
      <PieChart width={450} height={260}>
        <Pie
         activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={this.state.data}
         
          cx={240}
          cy={130}
          innerRadius={80}
          outerRadius={90}
          fill="rgb(60, 193, 250)"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
    );
  }
}
