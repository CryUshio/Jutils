;
(function() {

    StrUtils = function(type) {
        if (type === true) {
            for (func in StrUtils.prototype) {
                String.prototype[func] = StrUtils.prototype[func];
            }
        }
    }

    StrUtils.prototype = {
        isStr: function(item) {
            return this instanceof String ? true : typeof item === 'string';
        },
        swap: function() {
            let [str, a, b] = this instanceof String ? [this, ...arguments] : [...arguments];
            if (!this.isStr(str) || typeof(a + b) !== 'number') {
                throw new TypeError( !this.isStr(str) ? "parameter [str] for operation object must be String." : "parameters [a,b] for index must be Number.");
            }
            let strArr = this.isStr(str) ? str.split("") : str;
            let temp = strArr[a];
            strArr[a] = strArr[b];
            strArr[b] = temp;
            return strArr.join("");
        },
        reverse: function(str) {
            str = this instanceof String ? this : str;
            if (!this.isStr(str)) {
                throw new TypeError("parameter [str] for operation object must be String.");
            }
            let strArr = str.split("");
            let p = 0,
                len = strArr.length - 1;
            for (; p <= len/2; p++) {
                let temp = strArr[p];
                strArr[p] = strArr[len-p];
                strArr[len-p] = temp;
            }
            return strArr.join("");
        }
    }

    Object.defineProperties(StrUtils.prototype, {
        constructor: {
            value: StrUtils,
            enumerable: false,
            configurable: false
        }
    })
})();
