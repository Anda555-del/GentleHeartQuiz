document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("result");

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.getAttribute("data-value");

      if (value === "1") {
        result.textContent = "คุณมีแนวโน้มที่จะปกป้องใจตัวเองได้ดีในสถานการณ์กระทบใจ";
      } else if (value === "2") {
        result.textContent = "คุณมีวิจารณญาณและสามารถเข้าใจตัวเองในระหว่างเสพสื่อ";
      } else if (value === "3") {
        result.textContent = "คุณอาจต้องการพื้นที่อ่อนโยนและการสนับสนุนทางใจเพิ่มเติม";
      }
    });
     });