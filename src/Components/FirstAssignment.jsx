import React from 'react'

import {Col, Row, Table} from 'react-bootstrap';
import SingleRow from './SingleRow';

const data = [
    {
        type : 'Gears',
        timing : 'April 15 - 5:30 AM',
        sponser : 'Noble',
        matchType  : 'VS',
        teamName : 'Pittsburgh Knights',
        League : 'Gears 5 Pro League Split 2 Pro League'
    },

    {
        type : 'Gears',
        timing : 'April 15 - 5:30 AM',
        sponser : 'Fire N Ice Esports',
        matchType  : 'VS',
        teamName : 'Dream Conspiracy',
        League : 'Gears 5 Pro League Split 2 Pro League'
    },
    {
        type : 'Gears',
        timing : 'Finished',
        sponser : 'Noble',
        matchType  : '1-2',
        teamName : 'Pittsburgh Knights',
        League : 'Gears 5 Pro League Split 2 Pro League'
    },

]

const FirstAssignment = (props) => {
    return (
        <div style = {{backgroundColor : 'black'}}>
            
            <SingleRow data = {data[0]} />
            <br/>
            <SingleRow data = {data[1]} />
            <br/>

            <SingleRow data = {data[2]}/>
        </div>
    )
}

export default FirstAssignment
