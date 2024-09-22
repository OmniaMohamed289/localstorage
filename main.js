let theinput = document.querySelector(".container input");
let allspans = document.querySelectorAll(".buttons span");
let result = document.querySelector(".container .results > span");

allspans.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains("check-item")) {
            checkItem();   
        }
        if (e.target.classList.contains("add-item")) {
            addItem();   
        }
        if (e.target.classList.contains("delete-item")) {
            deleteItem();   
        }
        if (e.target.classList.contains("show-item")) {
            showItem();   
        }
    });
});

function checkinput() {
    result.innerHTML = 'Input can\'t be empty';
}

function checkItem() {
    if (theinput.value !== '') {
        if (localStorage.getItem(theinput.value)) {
            result.innerHTML = `Found <span>${theinput.value}</span>`;
        } else {
            result.innerHTML = `Not found <span>${theinput.value}</span>`;
        }
    } else {
        checkinput();
    }
}

function addItem() {
    if (theinput.value !== '') {
        localStorage.setItem(theinput.value, true);
        result.innerHTML = `Added <span>${theinput.value}</span>`;
        theinput.value = ''; // إفراغ حقل الإدخال بعد الإضافة
    } else {
        checkinput();
    }
}

function deleteItem() {
    if (theinput.value !== '') {
        localStorage.removeItem(theinput.value);
        result.innerHTML = `Deleted <span>${theinput.value}</span>`;
        theinput.value = ''; 
    } else {
        checkinput();
    }
}

function showItem() {
    const items = Object.keys(localStorage);
    result.innerHTML = items.length > 0 ? `Items: <span>${items.join(', ')}</span>` : 'No items found.';
}

window.onload = function() {
    theinput.focus();
};
