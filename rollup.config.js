import path from "path"
import babel from "rollup-plugin-babel";
import shebang from "rollup-plugin-preserve-shebang";
import jsx from "rollup-plugin-jsx";
import multiInput from "rollup-plugin-multi-input";


export default {
	input: ["./src/cli.js"], // Entry file
	output: {
		dir: "./lib", // Export documents
		// file: "./lib/bundle.js", // Export documents
		format: "cjs", // Output module syntax format
	},
	plugins: [
		multiInput(),
		babel(),
		shebang({
			// Override the entry. By default, uses `input` from config:
			// entry: path.resolve(process.cwd(), "src/cli.js"),

			// You can also set it manually if you want, which will always prepend it:
			shebang: "#!/usr/bin/env node",
		}),
		jsx({ factory: "React.createElement" }),
	],
};
