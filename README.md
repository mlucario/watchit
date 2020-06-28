# Create a watchit project

## What is watchit?
watchit is a javascript application which allows us monitor the file when it changes

## Requirements
Web browser.  
Need Node.js environment to run this application.  
You can download and setup from here:   
[Download](https://nodejs.org/en/)  

## Installation
Install node.js libraris
```bash
npm install
npm link
```

## Usage
```bash
watchit [filename]
```
**filename** is optional. If filename is **empty**, node will run index.js file

Example:
```bash
watchit test.js
OR
watchit 
```
## Showcase
### watch -h
![watch -h](assets/images/help.png)

### watch test.js
![watch -h](assets/images/watchit.png)

## What I learn ?
How to use npm to install node.js package: **chokidar**, **caporal**, **chalk**, **lodash**, and **child_process**.  