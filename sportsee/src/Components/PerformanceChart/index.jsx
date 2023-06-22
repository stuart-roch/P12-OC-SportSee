import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styled from "styled-components"


function PerformanceChart({data}){


    return (
    <Container>
        <ResponsiveContainer width="100%">
            <RadarChart data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
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
    font-size:12px;
    color:white;
`

export default PerformanceChart