;
(function() {

    ArrUtils = function(type) {
        type = type === true ? true : false;
        if (type) {
            for (func in ArrUtils.prototype) {
                Array.prototype[func] = ArrUtils.prototype[func];
            }
        }
    }

    ArrUtils.prototype = {
        isArr: function(item) {
            return item instanceof Array;
        },
        swap: function(arr, a, b) {
            if (!this.isArr(arr)) {
                return;
            }
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
            return arr;
        },
        ascSort: function(arr) {
            if (!this.isArr(arr)) {
                return;
            }
            return Array.prototype.sort.call(arr, (x, y) => x - y);
        },
        desSort: function(arr) {
            if (!this.isArr(arr)) {
                return;
            }
            return Array.prototype.sort.call(arr, (x, y) => y - x);
        },
        deweight: function(arr) {
            if (!this.isArr(arr)) {
                return;
            }
            return [...new Set(arr)];
        },
        deepCopy: function(arr) {
            if (!this.isArr(arr)) {
                return;
            }
            let res = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] instanceof Array) {
                    res[i] = arguments.callee(arr[i]);
                } else {
                    res[i] = arr[i];
                }
            }
            return res;
        }
    }

    Object.defineProperties(ArrUtils.prototype, {
        constructor: {
            value: ArrUtils,
            enumerable: false,
            configurable: false
        }
    })
})();
