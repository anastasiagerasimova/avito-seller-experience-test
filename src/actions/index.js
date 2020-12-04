const newStoriesLoaded = (newStories) => {
    return {
        type: 'FETCH_NEWSTORIES_SUCCES',
        payload: newStories
    }
}

export {
    newStoriesLoaded
}