const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve:{
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    }, //입력 얘네 합쳐서  -> 출력으로 만들어준다

    module:{
        rules:[{
            test:/\.jsx?/,
            loader: 'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react']
            }
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'),  //경로를 하나로 합쳐줌
        filename: 'app.js'
    }, //출력
};