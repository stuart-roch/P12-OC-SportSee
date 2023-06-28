import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import styled from "styled-components"


function ScoreChart({data}){

    return (
    <Container>
        <ChartHeader>
            <strong className='title'>Score</strong>
        </ChartHeader>
        <ResponsiveContainer width="100%" height={200}  >
            <PieChart>
                <Pie dataKey="value" data={data} innerRadius={70} startAngle={180} endAngle={-180} blendStroke>
                    <Cell fill="#FF0000" cornerRadius={50}/>
                    <Cell fill="#FBFBFB" />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    </Container>
    )
}

const Container = styled.div`
    position:relative;
    width:30%;
    background-color:#FBFBFB;
    border-radius:10px;
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