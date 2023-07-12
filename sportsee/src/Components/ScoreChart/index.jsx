import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import styled from "styled-components"
import { useState, useEffect } from 'react'
import LoadSpinner from '../LoadSpinner'


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
        
    },[api,id])

    return (
    <Container>
        <ChartHeader>
            <strong className='title'>Score</strong>
        </ChartHeader>
        {(isDataLoaded && !hasError) && <>
        <ResponsiveContainer width="100%" height={200}  >
            <PieChart >
                <Pie dataKey="value" data={chartData} innerRadius={70} startAngle={230} endAngle={-130} blendStroke>
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
        </div></>}
        {!isDataLoaded && <LoadSpinner/>}
        {hasError && <div className='err-msg_container'><strong>Une erreur empêche d'afficher le graphique</strong></div> }
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

    .obj-percent_container strong{
        font-size:1.5rem;
    }

    .obj-percent_container, .err-msg_container{
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
    }

    .err-msg_container{
        text-align:center;
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