function solution(players, m, k) {
  // 서버 대수(기본 1대, m명 미만 수용 가능)
  const servers = players.map(() => 1)
  let increaseCount = 0

  for (let i = 0; i < players.length; i++) {
    const prevServers = servers[i]
    const nextServers = Math.floor(players[i] / m) + 1
    
    if (prevServers <= nextServers) {
      const count = nextServers - prevServers
      increaseCount += count
      // 서버가 증설됐다면 k시간 동안 유지됨
      if (count > 0) {
        for (let j = 0; j < k; j++) {
          servers[i + j] += count
        }
      }
    }
  }
  console.log(players)
  console.log(servers.slice(0, players.length).map((v) => v -1))
  return increaseCount;
}

/**
 * "이용자가 n*m명 이상 (n+1)*m명 미만이라면 최소 n대의 증설된 서버가 운영 중이어야 합니다."
 * -> 인원수 P일 때 서버수 N = Math.floor(P/m)
 * 
 * servers[i + j] = nextServers * m
 * - 증설된 서버 각각이 k시간 유지되는 것인데 위와 같이 코드를 작성하면 한 번 서버를 증설할 때 이전에 증설했던 서버의 유지시간까지 늘어나는 문제가 있음 (제한 조건 오해)
*/

const players = [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5]	
const m = 3
const k = 5

console.log(solution(players, m, k))