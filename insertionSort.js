function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let nti = arr[i];
    for (let j = i - 1; (j >= 0); j--) {
      se = arr[j];
      if (se > nti) {
        arr[j + 1] = se;
      }
      else {
        arr[j + 1] = nti;
        break;
      }
    }
  }
  return arr;
}

arr = [-6, 20, 8, -2, 4];
console.log(insertionSort(arr));

// Big-O = O(n^2)
