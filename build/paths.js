var makeConfig = function(name) {
    name = name + '/';
    return {
        root: name,
        source: name + '**/*.js',
        html: name + '**/*.html',
        output: 'dist/' + name
    };
};

module.exports = {
    app: makeConfig("app"),
    benchmarks: makeConfig("benchmarks")
};
