function StrUtils() {}

StrUtils.prototype = {
    constructor: StrUtils,
    swap: function(strArr, a, b) {
        let temp = strArr[a];
        strArr[a] = strArr[b];
        strArr[b] = temp;
    },
    reverseStr: function(str) {
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
