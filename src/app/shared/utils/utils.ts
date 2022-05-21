export const shortUniqueId = (): string => {
    return `-${(Math.floor(Date.now() * Math.random())).toString(36)}`
}