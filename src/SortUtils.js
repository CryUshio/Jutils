;(function(){
  
  SortUtils = {};
  
  SortUtils.swap = function(arr, pre, cur){
    //[arr[pre], arr[cur]] = [arr[cur], arr[pre]];
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
  
  SortUtils.insectionSort = function(arr){
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
  
  SortUtils.mergeSort = function(arr){
    return merge(arr);

    function merge(arr){
      if(arr.length == 1){
        return arr;
      }
      let mid = Math.floor(arr.length / 2);
      return sort(merge(arr.slice(0, mid)), merge(arr.slice(mid)));
    }

    function sort(larr, rarr){
      let res = [];
      while(larr.length && rarr.length){
        if(larr[0]<rarr[0]){
          res.push(larr.shift());
        }
        else {
          res.push(rarr.shift());
        }
      }
      if(larr.length){
        res = res.concat(larr);
      }
      if(rarr.length){
        res = res.concat(rarr);
      }
      return res;
    }
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
  
  SortUtils.heapSort = function(arr){
    let self = this;
    let len = arr.length;
    return main(arr);

    function main(arr){
      heapInit(arr);
      while(--len){
        self.swap(arr, 0, len);
        heapAdjust(arr, 0, true);
      }
      return arr;
    }
    
    function heapInit(arr){
      let i = Math.floor(len/2) - 1;
      while(i>=0){
        heapAdjust(arr, i, false);
        i--;
      }
    }
    
    function heapAdjust(arr, parent, direction){ //direction: true - top to bottom
      let lchild = parent * 2 + 1;
      let rchild = parent * 2 + 2;
      let large = parent;
      if(lchild<len && arr[large]<arr[lchild]){
        large = lchild;
      }
      if(rchild<len && arr[large]<arr[rchild]){
        large = rchild;
      }
      self.swap(arr, parent, large);
      if(direction && large != parent){
        heapAdjust(arr, large);
      }
    }
  }
  
})();
