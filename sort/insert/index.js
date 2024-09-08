
/**
 * Phân tích: Yêu cầu đề bài cho là sắp xếp mảng truyền vào với thuật toán insertion sort
 * Theo mình tìm hiểu thì insertion sort là:
 * - thuật toán lặp qua mảng bắt đầu từ phẩn tử thứ 2
 * - Ở đầu mỗi vòng lặp sẽ có 1 biến nắm giữ giá trị hiện tại, và 1 biến đánh dấu vị trí của phần tử trước đó.
 * - Tiếp theo thì sẽ là một vòng lặp để so sánh giá trị trước đó với giá trị hiện tại & vị trí trước đó không được < 0. Nếu thỏa điều kiện thì sẽ đổi chỗ 2 giá trị.
 * - Lặp cho đến khi điều kiện không thỏa mãn nữa.
 */

/**
 *
 * @param {*} arr
 * @returns
 *
 * @description Implement a function that performs an insertion sort. The function should take in an array of integers and return an array with the integers sorted in ascending order. The input array is modified.
 *
 * @example
 * insertionSort([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
 * insertionSort([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
 * insertionSort([1, 2, 3, 10, 5]); // [1, 2, 3, 5, 10]
 */

export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];

    let previousPosition = i - 1;

    while (previousPosition >= 0 && arr[previousPosition] > currentValue) {
      arr[previousPosition + 1] = arr[previousPosition];
      previousPosition = previousPosition - 1;
    }

    arr[previousPosition + 1] = currentValue;
  }

  return arr;
}
