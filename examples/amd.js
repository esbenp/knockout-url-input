requirejs.config({
    baseUrl: '../bower_components',
    paths: {
        dist: "../dist",
        knockout: "knockout/dist/knockout",
        "knockout-url-input": "../dist/knockout-url-input"
    },
    shim: {
        "knockout-url-input": ["knockout"]
    }
});

requirejs(["knockout", "knockout-url-input"], function(ko, ko){
    var container = document.getElementById("container");
    ko.applyBindings({
        url: ko.observable()
    }, container);
});