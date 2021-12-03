import React from 'react'
import './main.css'

import { List, Avatar, Button } from 'antd';
import { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function Review() {

    const [visible, setVisible] = useState(false)

    return (
        <div className='review'>
            <PlusCircleOutlined className='icon' onClick={() => setVisible(!visible)} />
            <h5>Creative Reviews</h5>
            <List>
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg' />}
                        title='Reel'
                        description='3 hours ago'
                    />
                    <Button type='dashed'>Needs Reviews</Button>
                </List.Item>
            </List>
            {visible ?
                <div className='drop_text' >
                    <p>
                        Lorem ipsum dolor sit amet, dicam dice
                        ret molestiae in his. Eum putent  possit ea. Ex mei discere
                        feugiat, pri ex nisl delicata sapientem,
                    </p>
                </div> : ''}
        </div>
    )
}
