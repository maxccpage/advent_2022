

(async function() { 
const load = require('../loader')

const INPUT = await load(5)
console.log(INPUT)
const moves = INPUT.split('move ').map((x) => { 
    let a = x.replaceAll(' ', '').replaceAll('\n', '')
    let arr = a.split('from')
    if (arr.length > 1) { 
        let quantity = parseInt(arr[0])
        let start = parseInt(arr[1].charAt(0))
        let end = parseInt(arr[1].charAt(3))
    return { end, quantity, start }
    }
}).filter(x => x)

const board =  { 
    '1': ['G', 'F', 'V', 'H', 'P', 'S'],
    '2': ['G', 'J', 'F', 'B', 'V', 'D', 'Z', 'M'],
    '3': ['G', 'M', 'L', 'J', 'N'],
    '4': ['N', 'G', 'Z', 'V', 'D', 'W', 'P'],
    '5': ['V', 'R', 'C', 'B',],
    '6': ['V', 'R', 'S', 'M', 'P', 'W', 'L', 'Z'],
    '7': ['T', 'H', 'P'],
    '8': ['Q', 'R', 'S', 'N', 'C', 'H', 'Z', 'V'],
    '9': ['F', 'L', 'G', 'P', 'V', 'Q', 'J'],
}

for (let move of moves) { 
    let values = []

    for (let i = board[move.start]; i < move.quantity; i++) {  
        
        let item = board[move.start].pop();
        board[move.end].push(item)

    }

}

let keys = Object.keys(board)
let str = ''
for (let i = 1; i < keys.length + 1; i++) { 
    str += board[i][board[i].length - 1]
}
console.log(str)

})()
