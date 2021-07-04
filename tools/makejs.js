const fs = require('fs')

function main() {
    const prim = fs.readFileSync('primaria.json', 'utf-8')
    const sec = fs.readFileSync('secundaria.json', 'utf-8')
    console.log('module.exports.primaria = ' + prim)
    console.log('\n\module.exports.secundaria = ' + sec)
}

main()
