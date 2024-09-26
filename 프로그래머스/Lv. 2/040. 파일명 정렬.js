function solution(files) {
  return files.sort((a, b) => {
    const [aHead, aNumber, aTail] = a.split(/(\d+)/)
    const [bHead, bNumber, bTail] = b.split(/(\d+)/)
    
    const L = Math.max(aHead.length, bHead.length)
    const aH = aHead.toLowerCase()
    const bH = bHead.toLowerCase()
    
    for (let i = 0; i < L; i++) {
      const aCode = aH[i]?.charCodeAt(0)
      const bCode = bH[i]?.charCodeAt(0)

      if (!aCode) {
        return -1
      }
      if (!bCode) {
        return 1
      }
      if (aCode !== bCode) {
        return aCode - bCode
      }
    }
    
    const aN = Number(aNumber)
    const bN = Number(bNumber)
    
    if (aN !== bN) {
      return aN - bN
    }
    return 0
  })
}

const files = ["F -5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"] 

console.log(solution(files))