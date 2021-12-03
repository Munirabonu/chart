import React from 'react'
import './main.css'

import { List, Avatar, Button } from 'antd';


export default function Contact() {
    return (
        <div className='contact'>
            <h5>Recent Documents</h5>
            <List>
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg' />}
                        title='Reel'
                        description='3 hours ago'
                    />
                    <Button type='dashed'>Needs Reviews</Button>
                </List.Item>
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg' />}
                        title='Reel'
                        description='3 hours ago'
                    />
                    <Button type='primary'>Needs Reviews</Button>
                </List.Item>                    <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg' />}
                        title='Reel'
                        description='3 hours ago'
                    />
                    <Button type='dashed'>Needs Reviews</Button>
                </List.Item>
            </List>
        </div>
    )
}
