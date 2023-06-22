import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import styled from "styled-components"


function HebdoSessionChart({data}){


    return (
    <Container>
        <ChartHeader>
            <strong className='title'>Durée moyenne des sessions</strong>
        </ChartHeader>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart
                data={data}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
                barSize={4}
            >
                <XAxis dataKey="day" axisLine={false} tickLine={false}/>
                <Tooltip content={<CustomTooltip/>} />
                <Line dataKey="sessionLength" type="monotone" dot={false} stroke="#FFFFFF"/>
            </LineChart>
        </ResponsiveContainer>
    </Container>
    )
}

const Container = styled.div`
    width:30%;
    background-color:#FF0000;
    border-radius:10px;

    .custom-tooltip{
        background-color:white;
        color:black;
        font-size:7px;
        padding:2px 5px;
    }
`

const ChartHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    width:50%;
    margin-left:20px;

    .title{
        font-size:15px;
        color:white;
        opacity:0.5;
    }
`

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className='custom-tooltip_value'>{payload[0].value + " min"}</p>
        </div>
      );
    }
  
    return null;
  }





export default HebdoSessionChart