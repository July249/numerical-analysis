// 낙하하는 물체에 대한 수치해 계산 프로그래밍

/**
 * 낙하하는 물체에 대한 수치해 계산 프로그래밍
 *
 * 시간과 속도에 관한 초기 조건이 주어졌을 때 다음과 같은 공식을 반복적으로 수행하면 특정 시간에 이르르면, 종단 속도를 구할 수 있었다.
 *
 * 그에 대한 수식은 다음과 같다.
 *
 * * v_(i+1) = v_i + dv_i / dt * delta(t)
 *
 * 초기 조건으로 시간 t = 0일 때, 속도 v_0 = 0, 중력가속도 g = 9.81, 항력계수 c = 1.25, 질량은 68.1
 *
 * 어떤 시간 ti에 대해 dt만큼의 시간 간격 이후, 물체의 낙하 속도인 v_(i+1) 을 구하는 가상코드는 다음과 같다.
 *
 * * g = 9.81
 * * INPUT c, m
 * * INPUT ti, vi, tf, dt
 * * t = ti
 * * v = vi
 * * ---------------------------------
 * * h = dt (시간 간격)
 * * DO
 * *   IF t + dt > tf THEN // 마지막 시간 간격일 경우
 * *     h = tf - t // 마지막 시간 간격으로 조정
 * *   ENDIF
 * *   dvdt = g - (c / m) * v // 가속도 계산
 * *   v = v + dvdt * h // 속도 업데이트
 * *   t = t + h // 시간 업데이트
 * *   IF t >= tf EXIT // 마지막 시간에 도달하면 종료
 * * ENDDO
 * * ---------------------------------
 * * DISPLAY v // 최종 속도 출력
 *
 */

export default function fallingObject() {
  const terminalVelocity = 53.44;

  const g = 9.81; // 중력가속도[m/s^2]
  const c = 12.5; // 항력계수[kg/s]
  const m = 68.1; // 질량[kg]

  const ti = 0; // 초기 시간[s]
  const vi = 0; // 초기 속도[m/s]
  const tf = 42; // 종료 시간[s]
  const dt = 1; // 시간 간격[s]

  let t = ti;
  let v = vi;
  let err = 0;

  let h = dt;

  while (1) {
    console.log(`시간: ${t}일 때, 속도: ${v}`);

    if (t + dt > tf) {
      h = tf - t;
    }

    const dvdt = g - (c / m) * v;
    v = v + dvdt * h;
    t = t + h;

    if (t >= tf) {
      break;
    }
  }

  err = (Math.abs(terminalVelocity - v) / terminalVelocity) * 100;

  console.table({
    duration: t,
    velocity: v,
    error: err.toFixed(3) + '%',
  });
}
