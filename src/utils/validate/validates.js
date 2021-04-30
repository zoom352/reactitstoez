export const required = value => {
    if (value) return undefined
    return 'its a mistake'
}


export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return 'its preety much symvols'
    return undefined
} 


export const maxLengthCreatorMessage = (maxLengthMessage) => (value) => {
    if(value.length > maxLengthMessage) return 'its preety much symvols'
    return undefined
}


export const maxLengthCreatorLogin = (maxLengthLogin) => (value) => {
    if(value.length > maxLengthLogin) return 'its preety much symvols'
    return undefined
}