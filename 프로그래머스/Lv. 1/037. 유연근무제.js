function solution(schedules, timelogs, startday) {
  const satIndex = (13 - startday) % 7
  const sunIndex = (14 - startday) % 7
  
  let inTimePerson = 0
  
  for (let p = 0; p < schedules.length; p++) {
    const workTime = toMinutes(schedules[p])
    let inTimeCount = 0
    
    for (let t = 0; t < 7; t++) {
      if (t === satIndex || t === sunIndex) {
        continue
      }
      if (toMinutes(timelogs[p][t]) <= workTime + 10) {
        inTimeCount += 1
      }
    }
    if (inTimeCount === 5) {
      inTimePerson += 1
    }
  }
  return inTimePerson
}

const toMinutes = (time) => {
  const minute = time % 100
  const hour = Math.floor((time - minute) / 100)
  
  return hour * 60 + minute 
}

const schedules =	[730, 855, 700, 720]		
const timelogs = [[710, 700, 650, 735, 700, 931, 912], [908, 901, 805, 815, 800, 831, 835], [705, 701, 702, 705, 710, 710, 711], [707, 731, 859, 913, 934, 931, 905]]
const startday = 1

console.log(solution(schedules, timelogs, startday))