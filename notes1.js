const fs = require('fs')
const chalk = require('chalk')

const addNotes =  (title, body) => {
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter((note) => note.title === title)
    

   // const duplicateNotes = notes.filter(function (note) {
    //    return note.title === title
    //})

    if (duplicateNotes.length === 0) 
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note Added!')
    } 
    else 
    {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes1.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes1.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNotes = (title)=>{
    const notes = loadNotes()
    const noteToKeep = notes.filter((note)=>{
        if (note.title===title)
        {
            console.log(chalk.bgGreen('Note Removed'))
        }
        else{
            console.log(chalk.bgRed('NO Note Found'))
        }
        return note.title!==title
    })
    saveNotes(noteToKeep)

}

const listNotes = () =>{
    console.log(chalk.bgWhite.black.bold('Your Notes!'))
    
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title===title)
    if(duplicateNote){
        console.log(chalk.inverse(duplicateNote.title))
        console.log(duplicateNote.body)
    }
    else{
        console.log(chalk.bgRed('No Note Found!'))
    }
    
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}