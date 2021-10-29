import React, {useState} from 'react'
import './App.css'
import {_axios, _BaseURL} from './axios/_axios'
import {TaskType} from './EvoDB/commonTasks'
import s from './Tasks.module.css'

function App() {
    let [tasks, setTasks]= useState<TaskType[] | undefined>(undefined)
    const onQueryClick = () => {
        _axios.get(_BaseURL + 'common_tasks/')
            .then((res: any) => {
                console.log(res)
                setTasks(res.data.tasks)
            })
            .catch(err => console.warn(err))
    }

    return (
        <div className="App">
            <button onClick={onQueryClick}>query</button>
            <div className={s.tableTitles}>
                <div>Task name</div>
                <div>Task priority</div>
                <div>Practicing time</div>
            </div>
            {tasks && tasks.map((task, i) => <Tasks task={task} key={i}/>)}
        </div>
    );
}

type TasksPropsType = {
    task: TaskType
}
const Tasks: React.FC<TasksPropsType> = ({task}) => {
    return (
        <div className={s.table}>
            <div>{task.name}</div>
            <div className={s.tableItem}>{task.priority}</div>
            <div>{task.timeUsed}</div>
        </div>
    )
}

export default App;
