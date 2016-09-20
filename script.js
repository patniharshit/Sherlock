function showhide(divId) {
    var div = document.getElementById(divId);
    if (div.style.display !== "none") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}


function img_increase(imgId) {
    imgId.style.width = "80px";
    imgId.style.height = "80px";
}

function img_decrease(imgId) {
    imgId.style.width = "70px";
    imgId.style.height = "70px";
}

var i = 0,
    a = 1;

function nextdiv() {
    var arr = ['voilin', 'puzzles', 'chess'];

    document.getElementById(arr[i]).style.display = "none";
    document.getElementById(arr[a]).style.display = "block";

    i++;
    a++;
    if (a === 3) {
        a = 0;
    }
    if (i === 3) {
        i = 0;
    }
}
