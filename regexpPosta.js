const main = (
  L='111*1=',
  A='1*=',
  before=[
    /111\*([1]+)=/,
  ],
  after=[
    'xxx'
  ]) => {
  let contains = L.match(new RegExp(`^[${A}]+$`, 'g'))
  if (!contains) {
    console.error('Строка не состоит из Алфавита')
    return L
  }

  let c = before.find(b => L.search(b) !==-1)

  while (c) {
    let j = before.indexOf(c)
    console.log(`Номер правила ${j} => Lenta ${L}`)
    let m = L.match(c)[1]
    let r = L.replace(c, after[j])
    L = r.replace(/x/g, m)
    c = before.find(b => L.search(b) !==-1)
  }

  return L
}


// Read from files
const fs = require('fs')
console.log(
  main(
    fs.readFileSync('input/lenta', 'utf8'),
    fs.readFileSync('input/alphabet', 'utf8'),
    JSON.parse(fs.readFileSync('input/before.json', 'utf8')).map(v => new RegExp(v)),
    JSON.parse(fs.readFileSync('input/after.json'))
  )
)
