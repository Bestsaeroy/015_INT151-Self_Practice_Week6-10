// 1) เลือกกล่องและปุ่มทั้งหมด
const box = document.getElementById("box");
const buttons = document.querySelectorAll("button");

// 2) วนลูปให้ปุ่มทุกปุ่มทำงานเมื่อถูกคลิก
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color; // อ่านค่า data-color
    box.style.backgroundColor = color; // เปลี่ยนสีพื้นหลังของกล่อง
    box.textContent = color.toUpperCase(); // เปลี่ยนข้อความในกล่อง
  });
});
