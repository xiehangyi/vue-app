export function randomsort() {
  return Math.random() > .5 ? -1 : 1
  //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}

export function asc(a, b) {
  return a < b ? -1 : 1 // 如果a<b不交换，否则交换，即升序排列
}

export function desc(a, b) {
  return a > b ? -1 : 1 // 如果a>b不交换，否则交换，即将序排列
}
