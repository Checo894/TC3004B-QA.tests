function calculateAdd() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById('operator').innerHTML = '+';

    fetch(`http://localhost:8080/add?num1=${num1}&num2=${num2}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").textContent = data.result;
    })
    .catch(error => console.error("Error en la operación:", error));
}

function calculateSub() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById('operator').innerHTML = '-';

    fetch(`http://localhost:8080/sub?num1=${num1}&num2=${num2}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").textContent = data.result;
    })
    .catch(error => console.error("Error en la operación:", error));
}

function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').innerHTML = '';
    document.getElementById('result').innerHTML = 'Result: ';
}