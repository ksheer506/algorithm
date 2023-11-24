
/*
1. get(b) 
*/

function solution(players, callings) {
    const record = new Map(players.map((e, i) => [e, i]))
    const res = [...players]
  
    callings.forEach((e) => {
      const prev = record.get(e)
      const prevLeader = res[prev - 1]
  
      res[prev] = prevLeader 
      res[prev - 1] = e
      
      record.set(e, prev - 1)
      record.set(prevLeader, prev)
    })
    
    return res
}

const players = ["mumu", "soe", "poe", "kai", "mine"]
const callings = ["kai", "kai", "mine", "mine"]

console.log(solution(players, callings));