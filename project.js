function createMatrixInputs(rows, cols, id) {
    var container = document.getElementById(id);
    container.innerHTML = '';

    for (var i = 0; i < rows; i++) {
        var rowInputs = document.createElement('div');
        rowInputs.className = 'rowInputs';

        for (var j = 0; j < cols; j++) {
            var input = document.createElement('input');
            input.type = 'number';
            input.min = 0;
            rowInputs.appendChild(input);
        }
        container.appendChild(rowInputs);
    }
}

function multiplyMatrices() {
    var rows1 = parseInt(document.getElementById('rows1').value);
    var cols1 = parseInt(document.getElementById('cols1').value);
    var rows2 = parseInt(document.getElementById('rows2').value);
    var cols2 = parseInt(document.getElementById('cols2').value);

    if (cols1 !== rows2) {
        alert('Number of columns in Matrix 1 must be equal to the number of rows in Matrix 2.');
        return;
    }

    createMatrixInputs(rows1, cols1, 'matrix1Inputs');
    createMatrixInputs(rows2, cols2, 'matrix2Inputs');
    
    var result = [];
    for (var i = 0; i < rows1; i++) {
        var row = [];
        for (var j = 0; j < cols2; j++) {
            var sum = 0;
            for (var k = 0; k < cols1; k++) {
                sum += parseInt(document.getElementById('matrix1Inputs').children[i].children[k].value) * parseInt(document.getElementById('matrix2Inputs').children[k].children[j].value);
            }
            row.push(sum);
        }
        result.push(row);
    }

    displayResult(result);
}

function displayResult(result) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Result:</h2>';

    var table = document.createElement('table');
    for (var i = 0; i < result.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < result[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = result[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    resultDiv.appendChild(table);
}

document.getElementById('rows1').addEventListener('input', function() {
    createMatrixInputs(parseInt(this.value), parseInt(document.getElementById('cols1').value), 'matrix1Inputs');
});

document.getElementById('cols1').addEventListener('input', function() {
    createMatrixInputs(parseInt(document.getElementById('rows1').value), parseInt(this.value), 'matrix1Inputs');
});

document.getElementById('rows2').addEventListener('input', function() {
    createMatrixInputs(parseInt(this.value), parseInt(document.getElementById('cols2').value), 'matrix2Inputs');
});

document.getElementById('cols2').addEventListener('input', function() {
    createMatrixInputs(parseInt(document.getElementById('rows2').value), parseInt(this.value), 'matrix2Inputs');
});
