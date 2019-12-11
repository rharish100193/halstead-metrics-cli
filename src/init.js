const antlr4 = require("antlr4/index");
const Lexer = require("../lib/antlr4/JavaLexer.js");
const Parser = require("../lib/antlr4/JavaParser.js");

module.exports = function () {
	const input = "console.log('fff');";

	const chars = new antlr4.InputStream(input);
	const lexer = new Lexer.JavaLexer(chars);

	lexer.strictMode = false; // do not use js strictMode

	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new Parser.JavaParser(tokens);
	parser.buildParseTrees = true;
	const tree = parser.program();

	console.log(tree.toStringTree(parser.ruleNames));
};