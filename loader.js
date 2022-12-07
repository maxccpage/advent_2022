const util = require('util');
const path = require('path')
const fs = require('fs');
const read = util.promisify(fs.readFile); 

async function load(day) { 
    try { 
        const file = path.resolve(__dirname, `./inputs/day${day}.txt`)
        const res = await read(file, 'utf-8')
        return res;
    } catch(err) { 
        console.error(err)
    }
}

module.exports = load;
