var _ = {
    map: function(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            // Applies the callback function
            arr[i] = callback(arr[i]);
        }
        return arr;
    },
    reduce: function(arr, callback, input) {
        // Creates a property for the result using the initial input
        var result = input;
        for (var i = 0; i < arr.length; i++) {
            result = callback(result, arr[i]);
        }
        return result;
    },
    find: function(arr, callback) {
        for (var i = 0; i <arr.length; i++) {
            // Callback references the function passed into the method
            if (callback(arr[i])) {
                return arr[i];
            }
        }
        return false;
    },
    filter: function(arr, callback) {
        // New array for nums
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            // callback references the function passed into the method 
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    reject: function(arr, callback) {
        // New array for nums
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            // callback references the function passed into the method 
            if (!(callback(arr[i]))) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}