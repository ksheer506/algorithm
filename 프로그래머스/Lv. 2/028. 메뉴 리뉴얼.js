function solution(orders, course) {
  const dishes = [...new Set(orders.join(''))]
  
}

const createPowerSet = (elements) => {
  const stack = []
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
const course = [2,3,4]

console.log(solution(orders, course))

/*
1. orders를 모두 모아서 한 번 이상 출현한 문자를 모음
2. 각 문자를 원소로 가지는 멱집합 구함
3. 멱집합의 각 원소에 대해... course의 원소에 맞는 길이이고, orders의 각 원소에 2번 이상 포함되었다면 해당 문자열을 결과에 push
*/

/* 멱집합 구하기(재귀함수 대신 while)
1. stack []에서 시작
2. 원소들을 하나씩 stack에 push


[A, B, C]

0

A  
B  
C
*/