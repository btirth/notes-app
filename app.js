//const addition = require('./utils.js')
//const sum = addition(2,-1)
//console.log(sum)

//const notes = require('./notes.js')
//const msg = notes()
//console.log(msg)

//const validator = require('validator')
//console.log(validator.isEmail('tirth@gmail.com'))
//console.log(validator.isURL('http:/tirth.com'))

//const chalk = require('chalk')
//console.log(chalk.whiteBright.underline.bold.bgCyan('Success!'))
//console.log(chalk.blue('Hi ')+chalk.red('Tirth!'))
//console.log(chalk.red.bgWhite('Computer','Science',chalk.bold('and'),'Engineering'))

//in terminal write 'npm nodemon@1.19.0 -g'

//console.log(process.argv)
//console.log('')
//console.log(process.argv[2])

//const command = process.argv[2]
//if (command === 'add'){
//    console.log('Adding Notes!')
//}
//else if(command === 'remove'){
  //  console.log('Removing Notes!')

//}
//else {
 //   console.log('Please Enter Correct Function')
//}

const yargs = require('yargs')
//customize yargs version
yargs.version('1.1.0')     //By default it is 1.0.0


const notes1 = require('./notes1.js')
//Create add command
yargs.command({
    command:'add',
    describe:'add a new notes',
    builder:{
        title:{
            describe:'Title of notes',
            demandOption:true,
            type:'string'

        },
        body:{
            desccribe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        //console.log('Title: '+argv.title)
        //console.log('Body: '+argv.body)
       
        notes1.addNotes(argv.title,argv.body)
    }
})

//Create Remove Command
yargs.command({
    command:'remove',
    describe:'remove the note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            typr: 'string'
        }
    },
    handler(argv){
     //   console.log('Removing Notes!')
        notes1.removeNotes(argv.title)
    }
})

//Create List Command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler(){
        notes1.listNotes()
    }
})

//Create Read Command
yargs.command({
    command:'read',
    describe:'read the notes',
    builder:{
        title:{
            desccribe:'Note Title',
            demandOption: true,
            type:'string',
        }
    },
    handler(argv){
        notes1.readNote(argv.title)
    }
})

//console.log(yargs.argv)
yargs.parse()  //as alternate use of the above command because this print our value just one time