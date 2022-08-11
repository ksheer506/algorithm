function solution(new_id) {
    let answer = new_id.toLowerCase()
        .replace(/[^a-z\d\-\_\.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '');
    // 정규식 검색 시 g 플래그 유의
    
    if (answer.length >= 16) {
        answer = answer.substring(0, 15).replace(/\.$/, '');
    }
    if (answer.length < 1) {
        answer += 'a';
    }
    if (answer.length <= 2) {
        const last = answer.length - 1;
        
        answer += answer[last].repeat(2 - last);
    }

    return answer.replace(/\.{1,}$/, '');
}

const id = "...!@BaT#*..y.abcdefghijklm";
const res = "bat.y.abcdefghi"

console.log(solution(id) === res)