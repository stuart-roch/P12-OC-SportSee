import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import styled from "styled-components"
import { useState, useEffect } from 'react'


function DailyActivityChart({api, id}){

    const [chartData,setChartData] = useState([])
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [hasError,setHasError] = useState(false)

    useEffect(() => {
        
        async function fetchData(){
            try{
                const data = await api.userDailyActivity(id)
                setChartData(data)
            }catch(err){
                setHasError(true)
            }finally{
                setIsDataLoaded(true)
            }
        }

        fetchData()
        
    })

    return isDataLoaded && (
    <Container>
        <ChartHeader>
            <strong className='title'>Activité quotidienne</strong>
            <div className='legend'>
                <p className='legend_poids'>Poids (kg)</p>
                <p className='legend_calories'>Calories brûlées (kCal)</p>
            </div>
        </ChartHeader>
        <ResponsiveContainer width="100%" height={250}>
            <BarChart
                data={chartData}
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
                <YAxis yAxisId={1} dataKey="kilogram" domain={["dataMin-1","dataMax+2"]} orientation='right' axisLine={false} tickLine={false} tickCount={3}/>
                <YAxis yAxisId={2} dataKey="calories" hide domain={[0,"dataMax+10"]} />
                <Tooltip content={<CustomTooltip />}/>
                <Bar yAxisId={1} dataKey="kilogram" fill="#000000" radius={[20,20,0,0]}/>
                <Bar yAxisId={2} dataKey="calories" fill="#E60000" radius={[20,20,0,0]}/>
            </BarChart>
        </ResponsiveContainer>
    </Container>
    )
}

const Container = styled.div`
    width:100%;
    background-color:#FBFBFB;
    margin-bottom:25px;

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