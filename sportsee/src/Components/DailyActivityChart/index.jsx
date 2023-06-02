import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text } from 'recharts'
import styled from "styled-components"

const data = [
    {
        day:"1",
        poids:68,
        calories:350        
    },
    {
        day:"2",
        poids:69,
        calories:360       
    },
    {
        day:"3",
        poids:68.5,
        calories:389        
    },
    {
        day:"4",
        poids:68.3,
        calories:355        
    },
]


const BarShaped = styled(Bar)`
    border-radius:10px 10px 0 0;
    color:#E60000;
`
function DailyActivityChart(){

    return (
    <ResponsiveContainer width="60%" height={400}>
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
            <YAxis datakey="poids" orientation='right' axisLine={false} tickLine={false}/>
            <Tooltip />
            <Legend iconType='circle' verticalAlign='top' align='right' margin={{bottom:5}}/>
            <Bar name="Poids(kg)" dataKey="poids" fill="#000000" />
            <Bar name="Calories brûlées(kCal)" dataKey="calories" fill="#E60000" />
        </BarChart>
    </ResponsiveContainer>
    )
}

export default DailyActivityChart