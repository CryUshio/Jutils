# Jutils
一些常用javascript方法，仅支持es6及以上.  
Some commonly used javascript functions and only support ES6 or later.
## remarks
这是自己平时需要用而写的一些方法的合集，作为一种积累。
This is a collection of functions I wrote down for accumulation.

## details
#### 1.Event
* addSubscribe()  //添加订阅，need 2 parameters [eventType, subscriber]
* publish()  //发布订阅，need an object that contains a key 'type'
* removeSubscribe()  //删除订阅，need 2 parameters [eventType, subscriber]

#### 2.String
* swap() //swap string, swap(str, indexA, indexB)
* reverse()  //reverse it, reverse(str);

#### 3.Array
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
eg: EventUtils.js
```javascript
var e = new EventUtils();
var hello = function(event){
  console.log(event.name + " says hello");
}
e.addSubscribe('hey', hello);
e.publish({
  type: 'hey',
  name: 'nick'
});
//nick says hello
e.removeSubscribe('hey', hello);
```
