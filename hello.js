eval(global.ty());

console.log('hello');

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

module.exports = {
    test: function() {
        console.log(2323);
    }
}

hello.test();