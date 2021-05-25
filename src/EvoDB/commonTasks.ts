export type TaskPriorityType = 'S+' | 'S' | 'A+' | 'A' | 'B' | 'C' | 'D'

export type TaskType = {
    priority: TaskPriorityType
    timeUsed: number
}

export type TasksType = {
    [key: string]: TaskType
} | { resultCode: 0 | 1 }

export const commonTasks: TasksType = {
    programming: {
        priority: 'S+',
        timeUsed: 0
    },
    sport: {
        priority: 'A',
        timeUsed: 0
    },
    psychology: {
        priority: 'S',
        timeUsed: 0
    },
    languages: {
        priority: 'A',
        timeUsed: 0
    },
    rest: {
        priority: 'A',
        timeUsed: 0
    },
    healthMeal: {
        priority: 'A',
        timeUsed: 0
    },
    resultCode: 0
}