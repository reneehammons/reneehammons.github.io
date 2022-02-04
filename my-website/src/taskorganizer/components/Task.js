import React from 'react';

const Task = ({ task, onDelete, onHighlight }) => {
    return (
        <div className='taskBox'>
            <h4 className='taskName'>
                {task.text}  
            </h4>
            <span className='glyphicon glyphicon-trash' onClick={() => onDelete(task.id)}></span>
            <p className='taskDayTime'>{task.desiredDateDisplay} at {task.regularTime} {task.meridiem}</p> 
        </div>
    )
}

export default Task 