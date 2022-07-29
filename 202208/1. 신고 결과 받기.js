function solution(id_list, report, k) {
let answer = new Array(id_list.length).fill(0);
const userId = {};
const users = id_list.slice();
  // id_list에 맞게 유저명과 idx 매칭하기
  const filtered = report.forEach((el) => {
    const [user, reported] = el.split(" ");

    if (userId[user] === undefined) {
      userId[user] = id_list.findIndex(el => el === user)
      users[userId[user]] = []
    }
    const idx = userId[user]

    if (!users[idx].includes(reported)) {    users[idx].push(reported);
    }
  })
  
  const reported = []
  
  for (let i = 0; i < users.length; i++) {
    if(Array.isArray(users[i])) {
      reported.push(...users[i])
    }
  }
  
  const counts = reported.reduce((acc, cur) => {
    if(!acc[cur]) {
      acc[cur] = 0
    }
    acc[cur] += 1;
    return acc
  }, {})
  
  for (let i = 0; i < users.length; i++) {
     if(Array.isArray(users[i])) {
       for (let j = 0; j < users[i].length; j++) {
         if (counts[users[i][j]] >= k) {
           answer[i] += 1;
         }
       }
     }
  }
  
  // users가 배열인 것만 평탄하게 이어 붙여
  // 이 배열에서 고유값 찾기를 적용
  // 그렇게 얻은 객체에 for 루프를 돌려 k보다 큰 유저명만 얻음
    return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"]
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
const k = 2
console.log(solution(id_list, report, k))
let str = 'a'
str += str[str.length - 1].repeat(3-1)
console.log(str)
