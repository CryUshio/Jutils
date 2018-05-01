# Jutils
一些常用javascript方法，仅支持es6及以上.  
## 备注
这是自己平时用到的一些方法集合起来的一个项目，作为一种积累。
> 大佬都有自己的代码积累

所以，以上：）
## details
#### 1.String
* swap() //swap string, swap(str, indexA, indexB)
* reverse()  //reverse it, reverse(str);

#### 2.Array
* isArr()  //check it is Array or not, isArr(arr);
* swap()  
* ascSort()  //升序，ascending order
* desSort()  //降序，decending order
* deweight() //去重，removal of repetition
* deepCopy() //深拷贝，deep copy

## How to use
eg: StringUtils.js
```javascript
let strUtils = new StrUtils();
strUtils.reverse("abcd");  //"bcda"

new StrUtils(true);  //if you use 'true' to initialize, you can use them as prototype function.
"abcd".reverse();  //"bcda"
```
