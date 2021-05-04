const path = require('path');

module.exports = {
    name: 'mail-app',
    mode: 'development',//배포시 production,, development
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.css']// 이거를 쓰면 entry/app에서 확장자를 알아서 찾아줌
    },

    //제일 중요한거 두개!!
    entry: {///입력, 여기서는 자바스크립트 파일 두개를 받아서
        app: ['./client']
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets:
                        [
                            "@babel/preset-env",
                            '@babel/preset-react'
                        ],
                },
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
        ],
    },
    output: {//출력, 하나의 자바스크립트 파일로 출력해줌
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },
}

