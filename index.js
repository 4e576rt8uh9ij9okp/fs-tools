const {readdirSync} = require('fs')
const {extname} = require('path')

const getFilesFrom = (folderPath, filter) => {
    const fileList = []

    const readIt = (parent) => {
        const folder = readdirSync(parent, { encoding: "utf-8"}) 

        for(let i = 0, l = folder.length; i < l; i++){
            const newContentPath = `${parent}/${folder[i]}`
            const ext = extname(folder[i])

            if(ext){
                fileList.push(newContentPath)
                continue
            }else if(!ext){
                readIt(newContentPath)
            }

        }
    }

    const readItFilter = (parent) => {
        const folder = readdirSync(parent, { encoding: "utf-8"}) 

        for(let i = 0, l = folder.length; i < l; i++){
            const newContentPath = `${parent}/${folder[i]}`
            const ext = extname(folder[i])

            if(filter.includes(ext)){
                fileList.push(newContentPath)
                continue
            }else if(!ext){
                readItFilter(newContentPath)
            }

        }
    }

    if(filter) readItFilter(folderPath)
    else readIt(folderPath)

    return fileList
}

module.exports = {
    getFilesFrom
}