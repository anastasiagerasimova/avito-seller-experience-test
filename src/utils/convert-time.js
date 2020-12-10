const convertTime = (s) => {
    const date = new Date(s * 1000)
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}

export default convertTime