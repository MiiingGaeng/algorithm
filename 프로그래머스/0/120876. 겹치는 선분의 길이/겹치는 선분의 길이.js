function solution(lines) {
    let points = Array(201).fill(0);

    // 각 선분이 지나가는 구간을 기록
    for (let [start, end] of lines) {
        for (let i = start; i < end; i++) {
            points[i + 100]++; // 음수 인덱스를 피하기 위해 +100
        }
    }

    // 2개 이상 겹치는 부분의 길이를 세기
    return points.filter(count => count >= 2).length;
}
