module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    }
}