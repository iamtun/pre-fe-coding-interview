/**
 * 
 * @param {*} initialValue 
 * @returns 
 * 
 * @description
 * Returns a function that returns the next value in the sequence.
 * 
 * @example
 * const counter = makeCounter();
 * counter(); // 0
 * counter(); // 1
 * counter(); // 2
 * 
 * const counter = makeCounter(5);
 * counter(); // 5
 * counter(); // 6
 * counter(); // 7
 */

/**
 * Phân tích: Theo yêu cầu đề bài thì hàm của ta sẽ trả về 1 func và chúng ta sẽ gọi func đó để có thể tăng giá trị truyền vào. Các trường hợp cần xem sét:
 * - Hàm phải trả về 1 func và func này phải tăng giá trị truyền vào sau mỗi lần gọi. Nghe lạ phải không :v. Thì chúng ta sẽ tiếp cận 2 khái niệm đó là:
 * + Closure
 * + Postfix & Prefix increment
 * 
 * - Closure đề cập đến khả năng của một hàm có thể ghi nhớ và truy cập 
 *      các biến trong phạm vi (scope) của nó ngay cả khi hàm đó được thực thi bên ngoài phạm vi ban đầu mà nó được định nghĩa.
 * - Postfix increment: value++ -> Toán tử này sẽ tăng giá trị của value lên 1 nhưng nó sẽ trả về giá trị trước khi được tăng. Nghe có vẻ khó hiểu nhưng bạn thử gán nó cho 1 biến thì sẽ hiểu
 * - Prefix increment: ++value -> Toán tử này sẽ tăng giá trị của value lên 1 và trả về giá trị sau khi được tăng.
 */

export default function makeCounter(initialValue = 0) {
  function counter() {
    return initialValue++;
  }

  return counter;
}
