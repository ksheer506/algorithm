function solution(sizes) {
  let maxW = 0;
  let maxH = 0;
  
  for (let i = 0; i < sizes.length; i++) {
    let [w, h] = sizes[i];
    
    if (w < h) {
      [w, h] = [h, w];
    }
    
    maxW = maxW < w ? w : maxW;
    maxH = maxH < h ? h : maxH;
  }
  
  return maxW * maxH;
}

const sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]
console.log(solution(sizes))
