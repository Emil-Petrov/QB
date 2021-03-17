export const logger = (type) => (data) => {
    console.group(type)
    console.info('Data', data)
    console.groupEnd()    
}