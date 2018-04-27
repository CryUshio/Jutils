function StrUtils() {
    Object.defineProperties(StrUtils.prototype, {
        constructor: {
            enumerable: false,
            configurable: false
        }
    })
}

StrUtils.prototype = {
    constructor: StrUtils,
    isStrOrArr: function(item) {
        if (typeof item === 'string') {
            return 'string';
        }
        if (item instanceof Array) {
            return 'array';
        }
        return false;
    },
    swap: function(strArr, a, b) {
        if (!this.isStrOrArr(strArr) || !strArr) {
            return;
        }
        if (this.isStrOrArr(strArr) == 'string') {
            strArr = strArr.split("");
        }
        let temp = strArr[a];
        strArr[a] = strArr[b];
        strArr[b] = temp;
        return strArr.join("");
    },
    reverse: function(str) {
        if (typeof str !== 'string' || !str) {
            return;
        }
        let strArr = str.split("");
        let p = 0,
            q = strArr.length - 1;
        for (; p < q; p++, q--) {
            this.swap(strArr, p, q);
        }
        return strArr.join("");
    }
}
