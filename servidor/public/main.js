// given a element, clone template and append to element
function appendTemplate(element) {
    var template = document.querySelector('#template');
    var clone = document.importNode(template.content, true);
    element.appendChild(clone);
    
}

// given a element , add a listener event click
function addListener(element) {
    element.addEventListener('click', flipCard);
}

function flipCard() {
    this.classList.toggle('flipCard');
}

// check if classList contains '.card' and '.flipCard'
function checkClassList(el) {
    let card = el.shadowRoot.querySelector('.card');
    return card.classList.contains('card') && card.classList.contains('flipCard');
}


// check vertical bingo letter B
function checkVerticalBingoB() {
    let bingo = false;
    let count = 0;
    let id = '';
    for (let i = 1; i <= 5; i++) {
        id = 'b_' + i;
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
          count++;
        }
    }
    if (count === 5) {
        bingo = true;
    }
    return bingo;
}

// check vertical bingo letter I
function checkVerticalBingoI() {
    let bingo = false;
    let count = 0;
    let id = '';
    for (let i = 1; i <= 5; i++) {
        id = 'i_' + i;
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    if (count === 5) {
        bingo = true;
    }
    return bingo;
}

// check vertical bingo letter N
function checkVerticalBingoN() {
    let bingo = false;
    let count = 0;
    let id = '';
    for (let i = 1; i <= 5; i++) {
        id = 'n_' + i;
        // no check n_3
        if (i === 3) {
            continue;
        }
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    if (count === 4) {
        bingo = true;
    }
    return bingo;
}

// check vertical bingo letter G
function checkVerticalBingoG() {
    let bingo = false;
    let count = 0;
    let id = '';
    for (let i = 1; i <= 5; i++) {
        id = 'g_' + i;
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    if (count === 5) {
        bingo = true;
    }
    return bingo;
}

// check vertical bingo letter O
function checkVerticalBingoO() {
    let bingo = false;
    let count = 0;
    let id = '';
    for (let i = 1; i <= 5; i++) {
        id = 'o_' + i;
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    if (count === 5) {
        bingo = true;
    }
    return bingo;
}

// check FULL bingo
function checkFullBingo() {
    let bingo = false;
    let count = 0;
    let id = '';
    for (let i = 1; i <= 5; i++) {
        id = 'b_' + i;
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    for (let i = 1; i <= 5; i++) {
        id = 'i_' + i;
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    for (let i = 1; i <= 5; i++) {
        id = 'n_' + i;
        // no check n_3
        if (i === 3) {
            continue;
        }
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    for (let i = 1; i <= 5; i++) {
        id = 'g_' + i;
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    for (let i = 1; i <= 5; i++) {
        id = 'o_' + i;
        let el = document.getElementById(id);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    if (count === 24) {
        bingo = true;
    }
    return bingo;
}

// check horizontal first line bingo
function checkHorizontalBingoFirstLine() {
    let keys = ['b_1', 'i_1', 'n_1', 'g_1', 'o_1'];
    return checkGeneric(keys);
}

// check horizontal second line bingo
function checkHorizontalBingoSecondLine() {
    let keys = ['b_2', 'i_2', 'n_2', 'g_2', 'o_2'];
    return checkGeneric(keys);
}

// check horizontal third line bingo
function checkHorizontalBingoThirdLine() {
    let keys = ['b_3', 'i_3', 'g_3', 'o_3'];
    return checkGeneric(keys);
}

// check horizontal fourth line bingo
function checkHorizontalBingoFourthLine() {
    let keys = ['b_4', 'i_4', 'n_4', 'g_4', 'o_4'];
    return checkGeneric(keys);
}

// check horizontal fifth line bingo
function checkHorizontalBingoFifthLine() {
    let keys = ['b_5', 'i_5', 'n_5', 'g_5', 'o_5'];
    return checkGeneric(keys);
}

// generic function to check bingo
function checkGeneric(keys=[]) {
    let bingo = false;
    let count = 0;
    for (let i = 0; i < keys.length; i++) {
        let el = document.getElementById(keys[i]);
        let mycard = el.querySelector('my-card');
        if (checkClassList(mycard)) {
            count++;
        }
    }
    if (count === keys.length) {
        bingo = true;
    }
    return bingo;
}

// generate keys from diagonal bingo
function generateDiagonalBingoKeys() {
    let keys = [];
    keys.push('b_1');
    keys.push('i_2');
    // keys.push('n_3');
    keys.push('g_4');
    keys.push('o_5');
    return keys;
}

// generate keys from reverse diagonal bingo
function generateReverseDiagonalBingoKeys() {
    let keys = [];
    keys.push('b_5');
    keys.push('i_4');
    // keys.push('n_3');
    keys.push('g_2');
    keys.push('o_1');
    return keys;
}







document.addEventListener("custom:flip", (e) => {
    //console.log("Custom Flip", e.detail.number, e.detail.action);
    if (
      checkVerticalBingoB() ||
      checkVerticalBingoI() ||
      checkVerticalBingoN() ||
      checkVerticalBingoG() ||
        checkVerticalBingoO() ||
        checkHorizontalBingoFirstLine() ||
        checkHorizontalBingoSecondLine() ||
        checkHorizontalBingoThirdLine() ||
        checkHorizontalBingoFourthLine() ||
        checkHorizontalBingoFifthLine() ||
        checkGeneric(generateDiagonalBingoKeys()) || 
        checkGeneric(generateReverseDiagonalBingoKeys())
    ) {
        console.log("Bingo Lineal o Full");
        startConfetti();
    } else {
        stopConfetti();
    }	

});
