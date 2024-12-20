function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let nti = arr[i];
    let j = i - 1;
    while ((j >= 0) && (arr[j] > nti)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = nti;
  }
  return arr;
}

arr = [-6, 20, 8, -2, 4];
console.log(insertionSort(arr));

// Big-O = O(n^2)
