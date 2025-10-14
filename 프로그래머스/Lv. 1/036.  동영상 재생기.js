function solution(video_len, pos, op_start, op_end, commands) {
  const L = toSeconds(video_len)
  const opStart = toSeconds(op_start)
  const opEnd = toSeconds(op_end)
  
  const toOpEnd = (sec) => (sec >= opStart && sec <= opEnd) ? opEnd : sec
  
  const position = commands.reduce((a, c) => {
    if (c === "prev") {
      return toOpEnd(Math.max(0, a - 10))
    }
    if (c === "next") {
      return toOpEnd(Math.min(a + 10, L))
    }
    return a
  }, toOpEnd(toSeconds(pos)))
  
  return toTime(position)
}

/**
 * [prev 동작 이후]
 * 1. 0 미만이면 0
 * 2. opEnd보다 작으면 opEnd
 * 
 * [next 동작 이후]
 * 1. L보다 크면 L
 * 2. opStart보다 같거나 크면 opEnd
 */

function toSeconds(pos) {
  const [m, s] = pos.split(":")
  
  return Number(m) * 60 + Number(s)
}

function toTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec - 60 * m
  
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
}

function clamp(min, value, max) {
  return Math.min(Math.max(min, value), max)
}

console.log(
  solution(
    "07:22",	
    "04:05",
    "00:15",
    "04:07",
    ["next"]
  )
)