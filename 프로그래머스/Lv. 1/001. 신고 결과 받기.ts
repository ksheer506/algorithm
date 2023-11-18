type UserIds = readonly string[]

type Reports = readonly string[]

function solution(
  id_list: UserIds,
  report: Reports,
  k: number
) {
  const reportedCount = new Map(id_list.map((e) => [e, -k]))
  const notifyCount = new Map(id_list.map((e) => [e, 0]))

  const uniqueReports = [...new Set(report)]
  const reportsMap = uniqueReports
    .map((e) => e.split(' '))

  reportsMap.forEach(([r, t]) => {
    const prev = reportedCount.get(t) ?? 0

    reportedCount.set(t, prev + 1)
  })

  reportsMap.forEach(([r, t]) => {
    const prev = notifyCount.get(r) ?? 0
    const isBannedUser = (reportedCount.get(t) ?? -1) >= 0

    notifyCount.set(r, prev + (isBannedUser ? 1 : 0))
  })

  return [...notifyCount.values()]
}

const id_list = ["muzi", "frodo", "apeach", "neo"]
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
const k = 2

console.log(solution(id_list, report, k))
