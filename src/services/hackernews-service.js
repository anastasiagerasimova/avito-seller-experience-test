export default class HackerNewsService{
    constructor(){
        this._apiBase = 'https://hacker-news.firebaseio.com/v0'
    }

    getIdsNewStories = async() => {
        const res = await fetch('${this._apiBase}/newstories.json')
        const body = await res.json()
        return body.slice(0, 100)
    }
    
    _transformNewStory = (story) => {
        return {
            id: story.id,
            title: story.title
        }
    }
    
    getNewStory = async(id) => {
        const res = await fetch(`${this._apiBase}/item/${id}.json?print=pretty`)
        return await res.json()
    }
    
    getNewStories = async() => {
        const allId = await this.getIdNewStories()
        return allId.map(async(id) => {
            const story = await this.getNewStory(id)
            return this._transformNewStory(story)
        })
    }
    
}