const char64 =
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', '+', '~']

function encode (num10) {
  let str10 = num10.toString()
  // console.log(str10.replace('.', ''))
  let pointIndex = str10.indexOf('.')
  let decimalIndex = pointIndex !== -1 ? str10.length - pointIndex - 1 : 0
  // console.log(str10, decimalIndex, str10.replace('.', ''))
  let remainder64 = []
  let result64 = parseInt(str10.replace('.', ''))
  while (result64) {
    remainder64.push(result64 % 64)
    result64 = parseInt(result64 / 64)
  }
  return matchChar(remainder64) + matchChar([decimalIndex])
}

function decode (str64) {
  let num10 = 0
  let multiple = 1
  let decimalIndex = str64.slice(str64.length - 1)
  decimalIndex = char64.indexOf(decimalIndex)
  let nums10 = str64.split('').reverse()
  nums10.shift()
  nums10.forEach((item, i) => {
    let charNum = char64.indexOf(item)
    num10 += charNum * multiple
    multiple *= 64
  });
  console.log(num10)
  num10 /= Math.pow(10, decimalIndex)
  return num10.toFixed(decimalIndex)
}

function matchChar (charArr) {
  let res = charArr.map(item => char64[item])
  return res.reverse().join('')
}

let originNum = 12.890123456712345678
originNum = 123456789.12323456
originNum = 12345678912323456
let num64 = encode(originNum)
console.log(num64)
console.log(decode(num64))