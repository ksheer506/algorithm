function solution(skill, skill_trees) {
  const skillTier = new Map(skill.split('').map((e, i) => [e, i]));
  let validTreeCount = 0;
  
  for (let i = 0; i < skill_trees.length; i++) {
    let nextTier = 0;
    let isValid = true;
    
    for (let j = 0; j < skill_trees[i].length; j++) {
      const currentTier = skillTier.get(skill_trees[i][j]);
      
      if (currentTier > nextTier) {
        isValid = false;
        break;
      }
      nextTier = currentTier + 1;
      continue;
    }
    if (isValid) {
      validTreeCount++;
    }
  }
  
  return validTreeCount;
}

const skill = "CBD"
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]
// console.log(solution(skill, skill_trees));
