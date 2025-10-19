// WEEK06 - Thanakorn Chitsue 015

// 1 )
// ให้เขียนฟังก์ชัน applyDiscount(prices, discountFn) ที่ทำหน้าที่รับ Array ของราคาสินค้า และฟังก์ชันส่วนลด (discountFn) จากภายนอก 
// จากนั้นนำส่วนลดไปใช้กับราคาทั้งหมดใน Array โดยให้แสดงตัวอย่างการใช้งานอย่างน้อย 2 แบบ เพื่อสาธิตว่าฟังก์ชันสามารถรับฟังก์ชันอื่นเป็นพารามิเตอร์ได้ (Higher-order Function)

const applyDiscount = (prices, discountFn) =>
  prices.map(price => discountFn(price)) 

const percent10 = price => price * 0.9
const minus50 = price => price - 50

console.log(applyDiscount([100, 200, 300], percent10)) // [90, 180, 270]
console.log(applyDiscount([100, 200, 300], minus50))   // [50, 150, 250]



// 2 )
// ให้เขียนฟังก์ชัน getTotalHighScores(scores) เพื่อคำนวณผลรวมคะแนนที่ “ผ่านเกณฑ์” โดยต้องเขียนแบบ Declarative เท่านั้น โดยมีเงื่อนไขดังนี้
// คัดคะแนนที่ ≥ 50 (ใช้ filter)
// เพิ่มคะแนนที่เหลือ +10 (ใช้ map)
// นำคะแนนทั้งหมดมาหาผลรวม (ใช้ reduce)
// ห้ามใช้ for, while หรือการวนซ้ำแบบ Imperative

const getTotalHighScores = scores =>
  scores
    .filter(score => score >= 50) 
    .map(score => score + 10)     
    .reduce((sum, s) => sum + s, 0) 

console.log(getTotalHighScores([20, 50, 70, 30, 90])) // 240


// 3 )
// ให้เขียนฟังก์ชัน addPlayer(players, newPlayer) ที่เพิ่มสมาชิกใหม่เข้าไปในรายชื่อผู้เล่นโดย ห้ามแก้ไขค่าใน Array เดิม (No Mutation) และต้องส่งกลับ Array ใหม่เสมอ

const addPlayer = (players, newPlayer) =>
  [...players, newPlayer] 

const players = ["Alice", "Bob"]
const newPlayers = addPlayer(players, "Charlie")

console.log(players)     // ["Alice", "Bob"]
console.log(newPlayers)  // ["Alice", "Bob", "Charlie"]


// 4 )
// ให้เขียนฟังก์ชัน calculateBonus(salary) ที่ทำหน้าที่คำนวณเงินเดือนใหม่โดยเพิ่มโบนัส 10% โดยต้องเป็น Pure Function ซึ่งหมายความว่า
// ผลลัพธ์ขึ้นกับ input เท่านั้น
// ห้ามใช้ตัวแปรภายนอก
// input เดิม ต้องให้ผลลัพธ์เดิมทุกครั้งที่เรียกใช้


const calculateBonus = salary => salary * 1.1

console.log(calculateBonus(10000)) // 11000
console.log(calculateBonus(10000)) // 11000 (ให้ผลเหมือนเดิม)



// 5 )
// ให้เขียนฟังก์ชัน randomBonus(salary) ที่ทำการเพิ่มโบนัสแบบสุ่ม (เช่น 1%–10%) โดยไม่ต้องควบคุม randomness เพื่อให้เห็นว่าแม้ใส่ input เดิม 
// ผลลัพธ์สามารถเปลี่ยนไปได้ทุกครั้ง (Impure Function) และให้เปรียบเทียบความต่างกับข้อ 4


const randomBonus = salary =>
  salary * (1 + Math.random()) 

console.log(randomBonus(10000)) 
console.log(randomBonus(10000))



// 6 )
// ให้ประกาศฟังก์ชัน 2 ตัว ได้แก่
// - add5(x) → x + 5  
// - mul3(x) → x * 3
// จากนั้นให้เขียนฟังก์ชัน compose(f, g) ที่นำฟังก์ชันทั้งสองมาต่อกันเป็น Function Composition โดยต้องรองรับการเรียกแบบ
// - compose(mul3, add5)(input)
// เพื่อให้ผลลัพธ์คือ (input + 5) * 3

const compose = (f, g) => x => f(g(x)) 

const add5 = x => x + 5
const mul3 = x => x * 3

console.log(compose(mul3, add5)(10)) // (10+5)*3 = 45




// 7 )
// ให้เขียนฟังก์ชัน createCounter() โดยใช้ Closure เพื่อจัดการตัวแปรนับจำนวนแบบ private ห้ามเข้าถึงตรงจากภายนอก และให้มีเมธอดดังนี้
//    Method	    ความหมาย
// increment()	 เพิ่ม count ทีละ 1
// decrement()	 ลด count ทีละ 1
// getCount()	 อ่านค่า count ปัจจุบัน

// ต้องแสดงตัวอย่างการใช้งาน เช่น
// const c = createCounter()
// c.increment()
// c.increment()
// console.log(c.getCount()) // 2

const createCounter = () => {
  let count = 0 

  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count
  }
}

const counter = createCounter()
counter.increment()
counter.increment()

console.log(counter.getCount()) // 2
















