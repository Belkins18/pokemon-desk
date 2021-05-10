const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;


const path = {
    src: resolve(__dirname, "src"),
    dist: resolve(__dirname, "dist"),
    entry: resolve(__dirname, "src/index.js"),
    public: resolve(__dirname, "public/index.html")
}

module.exports = {
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    mode: NODE_ENV ? NODE_ENV : "development",
    entry: path.entry,
    output: {
        path: path.dist,
        filename: "main-[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ["ts-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.public
        })
    ]
}