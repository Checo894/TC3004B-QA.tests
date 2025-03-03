function calculateAdd() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    let result;
    result = parseFloat(num1) + parseFloat(num2);

    document.getElementById('operator').innerHTML = '+';
    document.getElementById('result').innerHTML = "Result: " + result;
}

function calculateSub() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    let result;
    result = parseFloat(num1) - parseFloat(num2);

    document.getElementById('operator').innerHTML = '-';
    document.getElementById('result').innerHTML = "Result: " + result;
}

function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').innerHTML = '';
    document.getElementById('result').innerHTML = 'Result: ';
}