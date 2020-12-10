export default class HackernewsService{
    constructor(){
        this._apiBase = 'https://hacker-news.firebaseio.com/v0'
    }

    getIdsNewStories = async() => {
        const res = await fetch(`${this._apiBase}/newstories.json`)
        const body = await res.json()
        return body.slice(0, 100)
    }
    
    getItem = async(id) => {
        const res = await fetch(`${this._apiBase}/item/${id}.json?print=pretty`)
        return await res.json()
    }
    
    getNewStories = async() => {
        const allId = await this.getIdsNewStories()
        return await Promise.all(allId.map(async (id) => {
            return await this.getItem(id)
        }))
    }

    getComments = async(id) =>{
        const {kids} = await this.getItem(id)
        return await Promise.all((kids || []).map(async (kid) => {
           return await this.getItem(kid)
        }))
    }
}
