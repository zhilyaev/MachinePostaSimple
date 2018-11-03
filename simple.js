
let L = '_____vv_vvv_v__________'.split('')

const T = [
  'Я здесь только чтобы массивы нумеровались с 1',
  ['<', 2],   //1
  ['?', 3,1], //2
  ['>', 4],   //3
  ['^', 5],   //4
  ['>', 6],   //5
  ['?', 7,5], //6
  ['v', 8],   //7
  ['>', 9],   //8
  ['?', 10,1],//9
  ['!'],      //10
]

// Начальное состояние коретки
let i = 6
// Начальная команда
let c = T[1]
// Флаг
let f = true

console.log('Начальное состояние ленты: ' + L.join(''))
let j = 0
while (f) {
  // Делаем ленту бесконечной
  if (i>=L.length) L.push('_')
  else if (i<0) i=0 & L.unshift('_')

  let z = false
  console.log(`[j = ${j}] Команда: ${c}`)
  switch (c[0]) {
    case '>':
      i++
      break
    case '<':
      i--
      break
    case '?':
      z = L[i] === 'v'
      break
    case 'v':
      console.log('\t[v] до:   ' + L.join(''))
      L[i] = 'v'
      console.log('\t[v] после:' + L.join(''))
      break
    case '^':
      console.log('\t[^] до:   ' + L.join(''))
      L[i] = '_'
      console.log('\t[^] после:' + L.join(''))
      break
    case '!':
      f = false
      break

    default:
      console.error(`Не существующая команда перехода ${c[0]}, ожидалось [>, <, !, ?, v, ^]`)
      f = false
  }
  // Если была команда ? успешно
  c = z ? T[c[2]] : T[c[1]]
  j++
}

console.log('Конечное состояние ленты: ' + L.join(''))
