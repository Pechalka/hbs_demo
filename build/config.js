({
    appDir: "../public",
    baseUrl: ".",
    dir: "../public/build",
    mainConfigFile: '../public/main.js',

    // enforceDefine: true,
    // urlArgs: "bust=" + (new Date()).getTime(),
    // waitSeconds: 200,

    optimizeCss: "standard",

    preserveLicenseComments: false,
    paths: {
      'requireLib' : 'lib/require'
    },

    optimize : 'none',

    modules: [
        {
            name: "main",
            include : ['hbs', 'requireLib']
        }
    ]
})
