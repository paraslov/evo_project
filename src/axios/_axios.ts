import {commonTasks} from '../EvoDB/commonTasks';

export const _BaseURL = 'https://para-slov.ru/'
const _baseResponse = {
    status: 200,
    headers: {},
    request: {},
    config: {}
}

export const _axios = {
    get(url: string) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                switch (url) {
                    case _BaseURL + 'common_tasks/':
                        res({..._baseResponse, data: commonTasks,})
                        break
                    default:
                        rej({message: 'Error: check if URL is correct', resultCode: 1})
                }
            }, randomDelay(500, 1500))
        })
    }
}

const randomDelay = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}