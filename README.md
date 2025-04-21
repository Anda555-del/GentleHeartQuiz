# GentleHeartQuiz
เข็มทิศใจ: แบบทดสอบแนวใจในการอ่าน  แบบทดสอบนี้จะช่วยคุณสำรวจหัวใจ ว่าวันนี้เหมาะกับการอ่านแบบไหน ไม่มีคำตอบผิด ไม่มีการตัดสิน เพียงแค่พาคุณกลับมาฟังจังหวะใจตัวเอง เพื่อเลือกเรื่องราวที่เหมาะกับคุณในเวลานี้ครับ
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>GentleHeartQuiz</title>
  <style>
    body {
      font-family: 'Prompt', sans-serif;
      padding: 2rem;
      max-width: 600px;
      margin: auto;
      background: #fff8f5;
      color: #333;
    }
    h1 {
      color: #b55f5f;
    }
    .question {
      margin-bottom: 1.5rem;
    }
    button {
      background-color: #f5c6aa;
      border: none;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 8px;
      margin-top: 1rem;
    }
    .result {
      margin-top: 2rem;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h1>แบบทดสอบเบื้องต้น</h1>
  <p>ตอบคำถามเล็กน้อย เพื่อรู้ว่าตอนนี้ใจของคุณพร้อมกับเนื้อหาแบบไหน</p>

  <div class="question">
    <p>1. วันนี้คุณรู้สึกอย่างไรกับตัวเอง?</p>
    <label><input type="radio" name="q1" value="1"> เครียด / หวั่นไหว</label><br>
    <label><input type="radio" name="q1" value="2"> ปกติ</label><br>
    <label><input type="radio" name="q1" value="3"> สงบ / เข้มแข็ง</label>
  </div>

  <div class="question">
    <p>2. ช่วงนี้คุณพักผ่อนเพียงพอหรือไม่?</p>
    <label><input type="radio" name="q2" value="1"> ไม่เพียงพอ</label><br>
    <label><input type="radio" name="q2" value="2"> พอใช้ได้</label><br>
    <label><input type="radio" name="q2" value="3"> เพียงพอ</label>
  </div>

  <div class="question">
    <p>3. เมื่อคุณเจอเนื้อหาหนัก ๆ คุณ...</p>
    <label><input type="radio" name="q3" value="1"> รู้สึกสะเทือนใจมาก</label><br>
    <label><input type="radio" name="q3" value="2"> รับได้บ้าง</label><br>
    <label><input type="radio" name="q3" value="3"> รับมือได้ดี</label>
  </div>

  <button onclick="calculateResult()">ดูผล</button>

  <div class="result" id="result"></div>

  <script>
    function calculateResult() {
      let total = 0;
      for (let i = 1; i <= 3; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
          total += parseInt(answer.value);
        } else {
          alert("กรุณาตอบคำถามให้ครบก่อนนะครับ");
          return;
        }
      }

      let resultText = '';
      if (total <= 4) {
        resultText = "ช่วงนี้คุณอาจต้องการเนื้อหาที่อ่อนโยนและเบาสบาย พักใจก่อนนะครับ";
      } else if (total <= 6) {
        resultText = "คุณอาจพร้อมรับเนื้อหาบางส่วนที่เข้มข้นได้ แต่อย่าลืมฟังใจตัวเองเสมอ";
      } else {
        resultText = "ดูเหมือนว่าคุณมีความมั่นคงในตอนนี้ พร้อมอ่านเนื้อหาเข้มข้นได้เลย!";
      }

      document.getElementById("result").innerText = resultText;
    }
  </script>

</body>
</html>
