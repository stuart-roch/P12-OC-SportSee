import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styled from "styled-components"
import { useState, useEffect } from 'react'
import LoadSpinner from '../LoadSpinner';

function PerformanceChart({api, id}){

    const [chartData,setChartData] = useState([])
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [hasError,setHasError] = useState(false)

    useEffect(() => {
        
        async function fetchData(){
            try{
                const data = await api.userPerformance(id)
                setChartData(data)
            }catch(err){
                setHasError(true)
            }finally{
                setIsDataLoaded(true)
            }
        }

        fetchData()
    },[id,api])


    return (
    <Container>
        {(isDataLoaded && !hasError) &&
        <ResponsiveContainer width="100%">
            <RadarChart data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" className='chart-labels'/>
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7}/>
            </RadarChart>
        </ResponsiveContainer>}
        {!isDataLoaded && <LoadSpinner/>}
        {hasError && <div className='err-msg_container'><strong>Une erreur empêche d'afficher le graphique</strong></div> }
    </Container>
    )
}

const Container = styled.div`
    position:relative;
    width:30%;
    background-color:#282D30;
    border-radius:10px;
    font-size:8px;
    color:white;
    height:300px;

    .err-msg_container{
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        text-align:center;
        color:white;
        font-size:16px;
    }
`

export default PerformanceChart