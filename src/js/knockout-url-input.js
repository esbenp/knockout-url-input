ko.bindingHandlers.urlInput = {
    init: function(element, valueAccessor, allBindings) {
        var value = valueAccessor();

        if (!ko.isObservable(value)) {
            throw new Error("knockout-url-input: value is not an observable.");
        }

        ko.bindingHandlers['value'].init(element, valueAccessor, allBindings);
        ko.bindingHandlers["urlInput"].update(element, valueAccessor);
    },
    update: function(element, valueAccessor) {
        var value = valueAccessor();
        var unwrappedValue = ko.unwrap(value);
        if (unwrappedValue === undefined || unwrappedValue === null || unwrappedValue === "") {
            value("http://www.");
        }
    }
}