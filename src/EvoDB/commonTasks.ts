export type TaskPriorityType = 'S+' | 'S' | 'A+' | 'A' | 'B' | 'C' | 'D'

export type TaskType = {
    name: string
    priority: TaskPriorityType
    timeUsed: number
}

export type TasksType = {
    tasks: TaskType[]
    resultCode: 0 | 1
}

export const commonTasks: TasksType = {
    tasks: [
        {
            name: 'Programming',
            priority: 'S+',
            timeUsed: 0
        },
        {
            name: 'Sport',
            priority: 'A',
            timeUsed: 0
        },
        {
            name: 'Psychology',
            priority: 'S',
            timeUsed: 0
        },
        {
            name: 'Foreign languages',
            priority: 'A',
            timeUsed: 0
        },
        {
            name: 'Rest and relax',
            priority: 'A',
            timeUsed: 0
        },
        {
            name: 'Health meal',
            priority: 'A',
            timeUsed: 0
        }],
    resultCode: 0
}