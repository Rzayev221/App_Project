import React from 'react'
import { useState } from 'react'
function  FeedbackItem() {
const [rating, setRating] = useState(4)
const [text, setText] = useState("blglas")


  return (
    <div className='card' >
    <div className='num-display'>{rating}</div>
    <div className='text-display'>{text}</div>

  
</div>
)
}
export default FeedbackItem