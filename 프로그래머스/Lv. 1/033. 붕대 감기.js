function solution(bandage, health, attacks) {
  const attackMap = new Map(attacks)
  const L = attacks.length
  const lastTurn = attacks[L - 1][0]
  const [
    REQUIRED_TURNS,
    RECOVER_PER_SEC,
    BONUS_RECOVER,
  ] = bandage
  
  let currentHealth = health 
  let turn = 1
  let successTurns = 0

  while (currentHealth >= 0 && turn <= lastTurn) {
    const damage = attackMap.get(turn) ?? 0
    
    turn += 1
    
    if (damage > 0) {
      currentHealth -= damage
      successTurns = 0
      continue
    }
    
    currentHealth += RECOVER_PER_SEC
    successTurns += 1
    
    if (successTurns === REQUIRED_TURNS) {
      currentHealth += BONUS_RECOVER
      successTurns = 0
    }

    currentHealth = Math.min(currentHealth, health)
  }
  
  return currentHealth > 0 ? currentHealth : -1
}

const bandage = [3, 2, 7]
const health = 20
const attacks = [[1, 15], [5, 16], [8, 6]]

console.log(solution(bandage, health, attacks));