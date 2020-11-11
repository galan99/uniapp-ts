export const checkTel = (str: string): boolean => {
  return /^1[0-9]{10}$/.test(str)
}

export const timeFormat = (val: number | string, type: string) => {
  // (1602315918, 'Y年M月D') -> '2020年10月10'
  const addNum = (num: number | string) => (num < 10 ? `0${num}` : num)
  const formateArr: string[] = ['Y', 'M', 'D', 'h', 'm', 's']
  const list: any[] = []

  const date = new Date((+val) * 1000)
  list.push(date.getFullYear())
  list.push(addNum(date.getMonth() + 1))
  list.push(addNum(date.getDate()))
  list.push(addNum(date.getHours()))
  list.push(addNum(date.getMinutes()))
  list.push(addNum(date.getSeconds()))

  for (const i in formateArr) {
    type = type.replace(formateArr[i], list[i])
  }
  return type
}