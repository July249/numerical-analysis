// 2차 방정식의 근을 구하는 알고리즘

/**
 * 2차 방정식의 근을 구하는 알고리즘
 *
 * - 다음의 단계를 수행한다고 하자.
 *
 * 1. 계수 a, b, c를 입력하도록 요구한다.
 *
 * 2. 2차식의 근의 공식을 구현하고, 여러 가지 예외 케이스(0으로 나눗셈 방지, 복소수의 사용을 허용)를 처리한다.
 *
 * 3. 해(x값)을 출력한다.
 *
 * 4. 사용자가 다시 단계 1로 돌아갈 수 있는 선택을 할 수 있도록 하고, 전 과정을 반복한다.
 *
 * ======================================================
 *
 * 위 4단계를 구조화한 가상 코드는 다음과 같다.
 *
 * DO
 *   INPUT a, b, c
 *   --------------------------------
 *   r1 = (-b + SQRT(b^2 - 4ac)) / 2a
 *   r2 = (-b - SQRT(b^2 - 4ac)) / 2a
 *   DISPLAY r1, r2
 *   --------------------------------
 *   DISPLAY "계속하시겠습니까? (Y/N)"
 *   INPUT response
 *   IF response = "N" EXIT
 * ENDDO
 *
 * 예외 케이스 고려
 *
 * 예외 1. a = 0인 경우
 * 예외 2. b = 0인 경우, 해가 존재하지 않는다.
 * 예외 3. b != 0인 경우, 하나의 해만 존재하고, 그 해는 -c/b이다.
 * 예외 4. a != 0인 경우, 해가 두 개 존재한다.
 * 예외 4-1. 판별식(b^2 - 4ac)이 0보다 작은 경우, 두 개의 복소수 해가 존재한다.
 * 예외 4-2. 판별식(b^2 - 4ac)이 0보다 큰 경우, 두 개의 실수 해가 존재한다.
 *
 * 이를 보완하면 다음과 같은 가상코드를 얻을 수 있다.
 *
 * DO
 *   INPUT a, b, c
 *   --------------------------------
 *   r1 = 0: r2 = 0: i1 = 0: i2 = 0
 *   IF a = 0 THEN
 *     IF b != 0 THEN
 *       r1 = -c / b
 *     ELSE
 *       DISPLAY "해가 존재하지 않습니다."
 *     ENDIF
 *   ELSE
 *     d = b^2 - 4ac
 *     IF d >= 0 THEN
 *       r1 = (-b + SQRT(d)) / 2a
 *       r2 = (-b - SQRT(d)) / 2a
 *     ELSE
 *       r1 = -b / 2a
 *       r2 = r1
 *       i1 = SQRT(Abs(d)) / 2a
 *       i2 = -i1
 *     ENDIF
 *   ENDIF
 *   DISPLAY r1, r2, i1, i2
 *   --------------------------------
 *   DISPLAY "계속하시겠습니까? (Y/N)"
 *   INPUT response
 *   IF response = "N" EXIT
 * ENDDO
 *
 * ======================================================
 */

// 위 가상코드를 자바스크립트로 구현

export default function quadraticEquation({ a, b, c }) {
  if (a === 0) {
    if (b !== 0) {
      const r1 = -c / b;
      console.log(`해: ${r1}`);
    } else {
      console.log('해가 존재하지 않습니다.');
    }
  } else {
    const d = b * b - 4 * a * c;
    if (d >= 0) {
      const r1 = (-b + Math.sqrt(d)) / (2 * a);
      const r2 = (-b - Math.sqrt(d)) / (2 * a);
      console.log(`해: ${r1}, ${r2}`);
    } else {
      const r1 = -b / (2 * a);
      const r2 = r1;
      const i1 = Math.sqrt(Math.abs(d)) / (2 * a);
      const i2 = -i1;
      console.log(`해: ${r1} + ${i1}i, ${r2} - ${i2}i`);
    }
  }
}
