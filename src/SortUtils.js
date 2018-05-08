;(function(){
  function swap(arr, pre, cur){
    let temp = arr[pre];
    arr[pre] = arr[cur];
    arr[cur] = temp;
  }

  function quickSort(arr, left, right){
    left = typeof left == 'number' ? left : 0;
    right = typeof right == 'number' ? right : arr.length;

    if(left >= right - 1){
      return;
    }

    let pos = left,
        store = pos + 1;

    for(let i=store; i<right; i++){
      if(arr[i]<=arr[pos]){
        swap(arr, store, i);
        store ++;
      }
    }

    swap(arr, pos, store - 1);
    quickSort(arr, left, store - 1);
    quickSort(arr, store, right);
    return;
  }
})();
