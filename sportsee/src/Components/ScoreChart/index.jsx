import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import styled from "styled-components"
import { useState, useEffect } from 'react'


function ScoreChart({api,id}){

    const [chartData,setChartData] = useState([])
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [hasError,setHasError] = useState(false)

    useEffect(() => {
        
        async function fetchData(){
            try{
                const data = await api.userScore(id)
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
    <Container>
        <ChartHeader>
            <strong className='title'>Score</strong>
        </ChartHeader>
        <ResponsiveContainer width="100%" height={200}  >
            <PieChart >
                <Pie dataKey="value" data={chartData} innerRadius={70} startAngle={180} endAngle={-180} blendStroke>
                    <Cell fill="#FF0000" cornerRadius={50}/>
                    <Cell fill="#FBFBFB" />
                </Pie>
                <Pie data={[{value : 1}]} dataKey="value" outerRadius={70} isAnimationActive={false} fill='#FFFFFF'/>
            </PieChart>
        </ResponsiveContainer>
        <div className='obj-percent_container'>
            <strong>{chartData[0].value*100 +"%"}</strong>
            <p>de votre</p>
            <p>objectif</p>
        </div>

    </Container>
    )
}

const Container = styled.div`
    position:relative;
    width:30%;
    background-color:#FBFBFB;
    border-radius:10px;

    .obj-percent_container p,strong{
        margin:0;
    }

    .obj-percent_container{
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
    }
`

const ChartHeader = styled.div`
    padding:20px 20px 0 20px;
    width:50%;
    margin-left:20px;

    .title{
        font-size:15px;
        color:#20253A;
    }
`

export default ScoreChart