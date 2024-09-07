/**
 *
 * @param {*} array
 * @param {*} iteratee
 * @returns
 *
 * @description
 * Returns the minimum value in an array by using the iteratee function.
 *
 * @example
 * minBy([2, 3, 1, 4], (num) => num); // => 1
 * minBy([{ n: 1 }, { n: 2 }, { n: 3 }], (o) => o.n); // => { n: 1 }
 * minBy(["apricot", "pear", "apple", "banana"], (fruit) => fruit); // => 'pear'
 *
 */

/**
 * Phân tích: Yêu cầu đề bài cho là tìm phần tử nhỏ nhất trong mảng dựa trên giá trị trả về của hàm iteratee
 * Các trường hợp cần xem sét:
 * - Đầu tiên cần phải xử lý mảng với kết quả trả về của hàm iteratee là null hoặc undefined
 * - Nếu mảng = 0 => undefined
 * - Nếu mảng = 1 => min chính là phần tử đầu tiên
 * - Nếu mảng = 2 => so sánh giá trị sau khi thực thi hàm
 * - Nếu mảng >= 2 => dùng vòng lặp để tìm phần tử nhỏ nhất
 */
export default function minBy(array, iteratee) {
  const arrayWithIterateeReturnValid = array.filter((val) => {
    const iterVal = iteratee(val);
    return typeof iterVal != "undefined" || iterVal;
  });

  const arrayLength = arrayWithIterateeReturnValid.length;

  if (arrayLength === 0) return undefined;

  if (arrayLength === 2) {
    const valFirstItem = iteratee(arrayWithIterateeReturnValid[0]);
    const valSecondItem = iteratee(arrayWithIterateeReturnValid[1]);

    return valFirstItem > valSecondItem
      ? arrayWithIterateeReturnValid[1]
      : arrayWithIterateeReturnValid[0];
  }

  let minVal = arrayWithIterateeReturnValid[0];

  for (let val of arrayWithIterateeReturnValid) {
    const iterateeVal = iteratee(val);
    const minValIteratee = iteratee(minVal);

    if (minValIteratee > iterateeVal) {
      minVal = val;
    }
  }

  return minVal;
}
