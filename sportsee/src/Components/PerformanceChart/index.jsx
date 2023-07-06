import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styled from "styled-components"
import { useState, useEffect } from 'react'
import Api from '../../utils/api/Api';

function PerformanceChart({api, id}){

    const [chartData,setChartData] = useState([])
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const [hasError,setHasError] = useState(false)

    useEffect(() => {
        
        async function fetchData(){
            try{
                const data = await Api.userPerformance(id)
                setChartData(data)
            }catch(err){
                setHasError(true)
            }finally{
                setIsDataLoaded(true)
            }
        }

        fetchData()
    },[id])


    return isDataLoaded && (
    <Container>
        <ResponsiveContainer width="100%">
            <RadarChart data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind"/>
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7}/>
            </RadarChart>
        </ResponsiveContainer>
    </Container>
    )
}

const Container = styled.div`
    width:30%;
    background-color:#282D30;
    border-radius:10px;
    font-size:8px;
    color:white;
`

export default PerformanceChart