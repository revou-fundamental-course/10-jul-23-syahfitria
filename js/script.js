const weightField = document.getElementById('weight');
const ageField = document.getElementById('age');
const heightField = document.getElementById('height');
const getTagInput = document.getElementsByTagName('input');
      
//Validation numeric field
function validateNumericInput(inputName) {
  const input = document.getElementById(inputName);
  const validationMessage = document.getElementById('validationMessage');

  const value = input.value.trim();

  // Regular expression to check if the value is numeric
  const numericRegex = /^\d+$/;

  if (!numericRegex.test(value)) {
    input.value = "";
  } else if (value.length > 3) {
    validationMessage.classList.remove('fade');
    validationMessage.textContent = 'Masukan paling sedikit 3 angka';
  } else {
    validationMessage.classList.add('fade');
    validationMessage.textContent = '';
  }

}

//validation field
document.getElementById('submit').addEventListener('click', function() {
  arrayAttributeName = []
  //set array untukattribute name
  if (weightField.value == "") arrayAttributeName.push(weightField.getAttribute("name"));
  if (ageField.value == "") arrayAttributeName.push(ageField.getAttribute("name"));
  if (heightField.value == "") arrayAttributeName.push(heightField.getAttribute("name"));
  // Lakukan validasi di sini
  if (weightField.value == "" || ageField.value == "" || heightField.value == "") { 
    validationMessage.classList.remove('fade');
    document.getElementById('validationMessage').innerText = 'Input ' + arrayAttributeName.join() + ' tidak boleh kosong!';
  } else {
    // Jika input valid, hapus pesan kesalahan (jika ada) dan lakukan tindakan lanjutan
    document.getElementById('validationMessage').innerText = '';
    // Lakukan tindakan lanjutan atau pengolahan data di sini sesuai kebutuhan
    validationMessage.classList.add('fade');
    console.log('Input valid:', inputData);
  }

});

//fungsi BMI
function calculateBMI() {
  // Ambil nilai berat dan tinggi dari input
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);


  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    return;
  }
  

  // Hitung BMI
  const bmi = weight / ((height / 100) ** 2);

  // Tampilkan hasil
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<h4>Your BMI:  '+ bmi.toFixed(2) + '</h4>';
  const detail = document.getElementById('description');
  if (bmi < 18.5) {
    resultDiv.innerHTML += '<p>Kamu kurang berat badan.</p>';
    detail.innerHTML = 'Berat rendah dapat menyebabkan berbagai masalah penyakit Infertilitas Anemia Osteoporosis Sistem Imun Lemah';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultDiv.innerHTML += '<p>Keren berat badanmu normal.</p>';
    detail.innerHTML = 'Kamu Keren';
  } else if (bmi >= 25 && bmi < 29.9) {
    resultDiv.innerHTML += '<p>Berat badanmu berlebih.</p>';
    detail.innerHTML = 'Beberapa penyakit yang berasal dari kegemukan Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis'; 
  } else {
    resultDiv.innerHTML += '<p>Obesitas.</p>';
    detail.innerHTML = 'Beberapa penyakit yang berasal dari kegemukan Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis'; 
  }
}