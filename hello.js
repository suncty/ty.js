eval(global.ty());

ty(function() {
    console.log("hello module initialize");

    async.waterfall([
        function(cb) {
            console.log("1");
            cb(null);
        },
        function(cb) {
            console.log("2");
            cb(null);
        },
        function(cb) {
            console.log("3");
            cb(null);
        },
    ],

    function(err) {
        console.log("end");
    });

    common();
})

ty('add', function(a, b) {
    return a + b;
})

ty(function() {
    console.log("hello module destroy");
})