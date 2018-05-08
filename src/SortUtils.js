;(function(){
  
  SortUtils = {};
  
  SortUtils.swap = function(arr, pre, cur){
    let temp = arr[pre];
    arr[pre] = arr[cur];
    arr[cur] = temp;
  }
  
  SortUtils.bubbleSort = function(arr){
    let len = arr.length;
    for(let i=0; i<len; i++){
      for(let j=i; j<len; j++){
        if(arr[i]>arr[j]){
          this.swap(arr, i, j);
        }
      }
    }
    return arr;
  }
  
  SortUtils.selectionSort = function(arr){
    let len = arr.length;
    for(let i=0; i<len; i++){
      let min = i;
      for(let j=i+1; j<len; j++){
        if(arr[min]>arr[j]){
          min = j;
        }
      }
      this.swap(arr, i, min);
    }
    return arr;
  }
  
  function insectionSort(arr){
    let len = arr.length;
    let cur, tmp;
    for(let i=1; i<len; i++){
      cur = i;
      tmp = arr[i];
      while(cur>0 && arr[cur-1]>tmp){
        arr[cur] = arr[cur-1];
        cur--;
      }
      arr[cur] = tmp;
    }
    return arr;
  }
  
  SortUtils.quickSort = function(arr, left, right){
    left = typeof left == 'number' ? left : 0;
    right = typeof right == 'number' ? right : arr.length;

    if(left >= right - 1){
      return;
    }

    let pos = left,
        store = pos + 1;

    for(let i=store; i<right; i++){
      if(arr[i]<=arr[pos]){
        this.swap(arr, store, i);
        store ++;
      }
    }

    swap(arr, pos, store - 1);
    quickSort(arr, left, store - 1);
    quickSort(arr, store, right);
    return arr;
  }
})();
