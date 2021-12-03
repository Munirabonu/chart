import React from 'react'
import { List, Avatar, Button } from 'antd';
import './main.css'
export default function Accaunt() {
    return (
        <div className='account'>
            <h5>Recent Documents</h5>
            <List>
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg' />}
                        title='Reel'
                        description='3 hours ago'
                    />
                </List.Item>
            </List>
            <Button className='acount_button' type='primary'>Slect</Button>
            <Button className='acount_button' type='primary'>Email</Button>
        </div>
    )
}
