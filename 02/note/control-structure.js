/**
 * ======================================================
 * 제어 구조 - Pseudocode and JavaScript
 * ======================================================
 *
 * 1. IF/THEN
 *
 * IF condition THEN
 *   True block
 * ENDIF
 *
 * * if (a) return console.log('Hooray!');
 *
 * ======================================================
 *
 * 2. IF/THEN/ELSE
 *
 * IF condition THEN
 *   True block
 * ELSE
 *   False block
 * ENDIF
 *
 * * if (a) {
 * *   return console.log('Hooray!');
 * * } else {
 * *   return console.log('Oh no!');
 * * }
 *
 * ======================================================
 *
 * 3. IF/THEN/ELSE IF
 *
 * IF condition1 THEN
 *   block1
 * ELSE IF condition2 THEN
 *   block2
 * ELSE IF condition3 THEN
 *   block3
 * ELSE
 *   block4
 * ENDIF
 *
 * * if (a) {
 * *   return console.log('Hooray!');
 * * } else if (!b) {
 * *   return console.log('Hooray!');
 * * } else {
 * *   return console.log('Oh no!');
 * * }
 *
 * ======================================================
 *
 * 4. CASE
 *
 * SELECT CASE Test Expression
 *   CASE value1
 *     block1
 *   CASE value2
 *     block2
 *   CASE value3
 *     block3
 *   CASE ELSE
 *     block4
 * END SELECT
 *
 * * switch (a) {
 * *   case 1:
 * *     return console.log('Hooray!');
 * *   case 0:
 * *     return console.log('Hooray!');
 * *   default:
 * *     return console.log('Oh no!');
 * * }
 *
 * ======================================================
 *
 * 5. DO EXIT
 *
 * DO
 *  block1
 *  IF condition EXIT
 *  block2
 * ENDDO
 *
 * * do {
 * *   console.log('Hooray!');
 * * } while (a);
 *
 * ======================================================
 *
 * 6. COUNT-CONTROLLED LOOP
 *
 * DOFOR i = start, finish, step
 *   block
 * ENDDO
 *
 * * for (let i = 0; i < 10; i++) {
 * *   console.log('Hooray!');
 * * }
 *
 * ======================================================
 */
