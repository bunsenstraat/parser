parser = require('.')
const util = require('util')

const a = 'function(){c.twee.lalal.run();}'
ast = parser.parse(a, { loc: true, range: true, tolerant: true })
//console.log(util.inspect(ast, {showHidden: false, depth: null, colors: true}))
parser.visit(ast, {
    FunctionCall: function(node) {
      console.log(util.inspect(node, {showHidden: false, depth: null, colors: true}))
    },
    MemberAccess: function(node) {
        console.log(node)
    },
    Identifier: function(node) {
        console.log(node)
    }
})