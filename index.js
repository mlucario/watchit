#! /usr/bin/env node

/* -------------- add a shebang #! /usr/bin/env node -------------- */
// ! We need provide the permision for app.js => chmod +x app.js

/* 
Steps
Detect file change
Help and introducts the app 
Exetucte some js code from execute a program 
*/
const _ = require('lodash');

// ANCHOR chalk to style console output
const chalk = require('chalk');

// filesystem of nodejs
const fs = require('fs');

/* -------------------------------- libraries ------------------------------- */
// ANCHOR chokidar ( files change listener)
const chokidar = require('chokidar');


// ANCHOR caporal ( help instruction )
const program = require('caporal');


// ANCHOR child_process from node.js 
const {spawn}  = require('child_process');

program
    .version('1.0')
    .argument('[filename]', 'Name of a file to execute')
    .action(async ({filename}) => {
        // if user doesn't type filename, we auto run index.js
        const name = filename || 'index.js';

        // check if file with finame is exist
        try{
            await fs.promises.access(name);
        }
        catch(err){
            throw new Error(chalk.bold.red(`Could not find the file: ${name}`));
        }
        
        let proc;

        // NOTE debounce will wait to execute in 100ms
        const start = _.debounce(() => {
            // this will run command => node name

            // ! we have to destroy / clear /kill the old process
            // if the old process is exist, we kill it
            if(proc){
                proc.kill();
            }

            console.log(chalk.blue('Starting Process...'));

            // NOTE spawn will Return child_process object
            proc =  spawn('node',[name], {stdio : 'inherit'});

            
        }, 100);

        chokidar.watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start);
    });

program.parse(process.argv);


