const fs = require('fs')

function main() {
    const tsv = fs.readFileSync(process.argv[2], 'utf-8')
    let books = []
    let lines = tsv.split('\n').map(l => l.trim())
    for (let line of lines) {
        let cells = line.split('\t')
        books.push({
            grade: cells[0],
            subject: cells[1],
            title: cells[2],
            isbn: cells[3],
            amount: cells[5] === undefined ? +cells[4] : +cells[5],
            amount0: +cells[4]
        })
    }
    books = books.filter(b => b.amount > 0)
    console.log(JSON.stringify(books, null, 2))
}

main()
