import React, { useState } from 'react'
import Text from './Text'
import SimpleCharts from './SimpleCharts'

import { RadialBar } from '@ant-design/charts'
import './main.scss'
import RcQueueAnim from 'rc-queue-anim'


export default function AdminCharts() {

    const [visible, setVisible] = useState(false)
    const data = [
        {
            name: 'project 5',
            percent: 75,
            color: '#4DACF6',
        },
        {
            name: 'Project 4',
            percent: 40,
            color: '#674DF6',
        },
        {
            name: 'Project 3',
            percent: 90,
            color: '#32DBBB',
        },
        {
            name: 'Project 2',
            percent: 70,
            color: '#FE5B81',
        },
        {
            name: 'Project 1',
            percent: 30,
            color: '#FFA800',
        },
    ];
    const config = {
        width: 200,
        height: 250,
        autoFit: false,
        appendPadding: [0, 0, 20, 10],
        data,
        xField: 'name',
        yField: 'percent',
        innerRadius: 0.3,
        barBackground: {
            style: {
                fill: '#616570d5',
            },
        },
        barStyle: {
            lineCap: 'round',
        },
        minBarWidth: 8,
        maxBarWidth: 8,
        color: ({ name }) => {
            return data.find((d) => d.name === name).color;
        },
    };
    return (
        <>
            <RcQueueAnim className="demo-content">
                {!visible ?
                    <div className='AdminCharts demo-thead' key="a">
                        <Text />
                        <div className='chart demo-thead'>
                            <div onClick={() => setVisible(!visible)} className='button_chart'>. . .</div>
                            <RadialBar {...config} />
                        </div></div> :
                    <SimpleCharts visible={visible} setVisible={setVisible} />}
            </RcQueueAnim>
        </>
    )
}
