import { Progress } from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'
import React from 'react'
import './mains.scss'
import RcQueueAnim from 'rc-queue-anim'
/*****************************************this page is a spread of chart************************************/


export default function SimpleCharts({ setVisible, visible }) {

    return (
        <>
        <RcQueueAnim className="demo-content" key='banner'>
            <div className='openChart demo-thead'>
                <MinusCircleOutlined className='icon' onClick={() => setVisible(!visible)} />
                <div className='bar demo-thead'>
                    <Progress
                        format={() =>
                            <div className="textbar">
                                <h2>42</h2>
                                <h6>days left</h6>
                                <p>before launch</p>
                            </div>
                        }
                        type="circle"
                        percent={30}
                        strokeWidth='3'
                        width={200}
                        strokeColor='#FFA800'
                        trailColor='#616570d5'
                    />
                    <h3> Project 1 </h3>
                </div>
                <div className='bar'>
                    <Progress
                        format={() =>
                            <div className="textbar">
                                <h2>13</h2>
                                <h6>days left</h6>
                                <p>before launch</p>
                            </div>
                        }
                        type="circle"
                        percent={70}
                        strokeWidth='3'
                        width={200}
                        strokeColor='#FE5B81'
                        trailColor='#616570d5'
                    />
                    <h3> Project 2 </h3>
                </div>
                <div className='bar'>
                    <Progress
                        format={() =>
                            <div className="textbar">
                                <h2>3</h2>
                                <h6>days left</h6>
                                <p>before launch</p>
                            </div>
                        }
                        type="circle"
                        percent={90}
                        strokeWidth='3'
                        width={200}
                        strokeColor='#32DBBB'
                        trailColor='#616570d5'
                    />
                    <h3> Project 3 </h3>
                </div>
                <div className='bar'>
                    <Progress
                        format={() =>
                            <div className="textbar">
                                <h2>18</h2>
                                <h6>days left</h6>
                                <p>before launch</p>
                            </div>
                        }
                        type="circle"
                        percent={40}
                        strokeWidth='3'
                        width={200}
                        strokeColor='#674DF6'
                        trailColor='#616570d5'

                    />
                    <h3> Project 4 </h3>
                </div>
                <div className='bar'>
                    <Progress
                        format={() =>
                            <div className="textbar">
                                <h2>8</h2>
                                <h6>days left</h6>
                                <p>before launch</p>
                            </div>
                        }
                        type="circle"
                        percent={75}
                        strokeColor='#4DACF6'
                        strokeWidth='3'
                        width={200}
                        trailColor='#616570d5'
                    />
                    <h3> Project 5 </h3>
                </div>
            </div>
            </RcQueueAnim>
        </>
    )
}
