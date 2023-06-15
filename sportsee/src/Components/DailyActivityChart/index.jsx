import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Text } from 'recharts'
import styled from "styled-components"


function DailyActivityChart({data}){


    return (
    <Container>
        <ChartHeader>
            <strong className='title'>Activité quotidienne</strong>
            <div className='legend'>
                <p className='legend_poids'>Poids (kg)</p>
                <p className='legend_calories'>Calories brûlées (kCal)</p>
            </div>
        </ChartHeader>
        <ResponsiveContainer width="100%" height={200}>
            <BarChart
                data={data}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
                barSize={4}
            >
                <CartesianGrid strokeDasharray="3" vertical={false}/>
                <XAxis dataKey="day" />
                <YAxis datakey="kilogram" orientation='right' axisLine={false} tickLine={false}/>
                <Tooltip content={<CustomTooltip />}/>
                <Bar dataKey="kilogram" fill="#000000" radius={[20,20,0,0]}/>
                <Bar dataKey="calories" fill="#E60000" radius={[10,10,0,0]}/>
            </BarChart>
        </ResponsiveContainer>
    </Container>
    )
}

const Container = styled.div`
    width:70%;
    background-color:#FBFBFB;

    .custom-tooltip{
        background-color:red;
        color:white;
        font-size:7px;
        padding:2px 5px;
    }
`

const ChartHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px;

    .title{
        font-size:15px;
    }

    .legend{
        display:flex;
        justify-content:space-between;
        width:40%;
        font-size:14px;
        color:#74798C;
    }

    .legend p{
        display:flex;
        align-items:center;
    }
    .legend p:before{
        content:"";
        display:block;
        width:7px;
        height:7px;
        border-radius:100px;
        margin-right:5px;
    }
    .legend_poids:before{
        background-color:black;
    }
    .legend_calories:before{
        background-color:red;
    }
`

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className='custom-tooltip_value'>{payload[0].value + "kg"}</p>
          <p className='custom-tooltip_value'>{payload[1].value + "kCal"}</p>
        </div>
      );
    }
  
    return null;
  };





export default DailyActivityChart