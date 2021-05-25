import React, {useState} from 'react'
import './App.css'
import {_axios, _BaseURL} from './axios/_axios';
import {TaskPriorityType} from './EvoDB/commonTasks';

function App() {
    let [prio, setPrio]= useState<TaskPriorityType | undefined>(undefined)
    const onQueryClick = () => {
        _axios.get(_BaseURL + 'common_tasks/')
            .then((res: any) => {
                console.log(res)
                setPrio(res.data.programming.priority)
            })
            .catch(err => console.warn(err))
    }

    return (
        <div className="App">
            <button onClick={onQueryClick}>query</button>
            {prio && <Tasks prio={prio} />}
        </div>
    );
}

type TasksPropsType = {
    prio: TaskPriorityType
}
const Tasks: React.FC<TasksPropsType> = (props) => {
    return (
        <div>
            <span>{`programming prio is: ${props.prio}`}</span>
        </div>
    )
}

export default App;
