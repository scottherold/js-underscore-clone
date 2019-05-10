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
// you just created a library with 5 methods!

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds); // if things are working right, this will return [1,3,5].
