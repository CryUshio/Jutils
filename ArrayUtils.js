;
(function() {

    ArrUtils = function(type) {
        if (type === true) {
            for (func in ArrUtils.prototype) {
                Array.prototype[func] = ArrUtils.prototype[func];
            }
        }
    }

    ArrUtils.prototype = {
        isArr: function(item) {
            item = this instanceof Array ? this : item;
            return item instanceof Array;
        },
        swap: function() {
            let [arr, a, b] = this instanceof Array ? [this, ...arguments] : [...arguments];
            if (!this.isArr(arr) || typeof(a + b) !== 'number') {
                return new TypeError();
            }
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
            return arr;
        },
        ascSort: function(arr) {
            arr = this instanceof Array ? this : arr;
            if (!this.isArr(arr)) {
                return;
            }
            return Array.prototype.sort.call(arr, (x, y) => x - y);
        },
        desSort: function(arr) {
            arr = this instanceof Array ? this : arr;
            if (!this.isArr(arr)) {
                return;
            }
            return Array.prototype.sort.call(arr, (x, y) => y - x);
        },
        deweight: function(arr) {
            arr = this instanceof Array ? this : arr;
            if (!this.isArr(arr)) {
                return;
            }
            return [...new Set(arr)];
        },
        deepCopy: function(arr) {
            arr = this instanceof Array ? this : arr;
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
