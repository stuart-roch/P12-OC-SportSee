import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import styled from "styled-components"
import { useState, useEffect } from 'react'


function HebdoSessionChart({api,id}){

    const [chartData,setChartData] = useState([])
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [hasError,setHasError] = useState(false)

    useEffect(() => {
        
        async function fetchData(){
            try{
                const data = await api.userAverageSessions(id)
                setChartData(data)
            }catch(err){
                setHasError(true)
            }finally{
                setIsDataLoaded(true)
            }
        }

        fetchData()
        
    },[])


    return isDataLoaded && (
    <Container className='average-sessions-chart_container'>
        <ChartHeader>
            <strong className='title'>Durée moyenne des sessions</strong>
        </ChartHeader>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData} onMouseMove={(e) => customMouseMove(e)}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#FFFFFF80" padding={{left:10,right:10}} />
                <Tooltip content={<CustomTooltip/>} />
                <Line dataKey="sessionLength" type="monotone" dot={false} stroke="#FFFFFF" />
            </LineChart>
        </ResponsiveContainer>
        <div className='tooltip-cursor_container'></div>
    </Container>
    )
}

const Container = styled.div`
    width:30%;
    background-color:#FF0000;
    border-radius:10px;
    position:relative;
    
    .custom-tooltip{
        position:relative;
        background-color:white;
        color:black;
        font-size:7px;
        padding:2px 5px;
        z-index:1;
    }

    .tooltip-cursor_container{
        display:none;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.1);
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

  function customMouseMove(e){
    const sessionWrap = document.querySelector('.average-sessions-chart_container');
    const cursorContainer = document.querySelector(".tooltip-cursor_container")

    if (e.isTooltipActive) {
      let windowWidth = sessionWrap.offsetWidth;
      let mouseXpercent = Math.floor(
        (e.activeCoordinate.x / windowWidth) * 100
      );
      
      cursorContainer.style.display = "block"
      cursorContainer.style.width = `${mouseXpercent}%`;
    }else{
        cursorContainer.style.display = "none"
    }
    
}



export default HebdoSessionChart