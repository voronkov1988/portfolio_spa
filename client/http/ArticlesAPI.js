import {$api} from '../http/index'

export const getArticles = async () => {
    const {data} = await $api.get('api/articles')
    return data
}