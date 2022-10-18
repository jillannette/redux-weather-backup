import { Sparklines, SparklinesLine } from 'react-sparklines'

const Chart = ({data, color, label}) => {
  return (
    <>
    <h2>{label}</h2>
    <Sparklines data={data}>
      <SparklinesLine color={color}/>
    </Sparklines>
    </>
  );
};

export default Chart;