({
    appDir: "../",
    baseUrl: "scripts/",
    dir: "../../webapp-build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    optimize: "none",

    paths: {
        "jquery": "empty:",
        "backbone": "scripts"
    },

    modules: [
        //Optimize the application files. jQuery is not
        //included since it is already in require-jquery.js
        {
            name: "main"
        }
    ]
})
