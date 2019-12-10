const antlr4 = require("antlr4");
const Lexer = require("../lib/antlr4/Java9Lexer.js");
const Parser = require("../lib/antlr4/Java9Parser.js");

module.exports = {
	test () {
		const input = "{x: 1}";

		const chars = new antlr4.InputStream(input);
		const lexer = new Lexer.Java9Lexer(chars);

		lexer.strictMode = false; // do not use js strictMode

		const tokens = new antlr4.CommonTokenStream(lexer);
		const parser = new Parser.Java9Parser(tokens);
		const tree = parser.program();

		console.log(tree.toStringTree(parser.ruleNames));
	}
};