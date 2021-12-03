import { MinusCircleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import './maint.scss'

export default function Text() {

    const [visible, setVisible] = useState(false)

    return (
        <div className='text_list'>
            <MinusCircleOutlined className='icon' onClick={() => setVisible(!visible)} />
            <div className='text'>
                <h3>Happy Tuesday, Lily. </h3>
                <p>Lorem ipsum dolor sit amet, dicam dice
                    ret molestiae in his. Eum putent  possit ea. Ex mei discere
                    feugiat, pri ex nisl delicata sapientem, quod bonorum appetere te
                    per. Offendit dissentiunt at nam, ea has illud dolore deseruisse.</p>
            </div>

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
