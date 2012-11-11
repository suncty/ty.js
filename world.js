eval(global.ty());

ty(function() {
    console.log("world module initialize");

    console.log("add 10 + 10 = ", hello.add(10, 10));
})

ty(function() {
    console.log("world module destroy");
})