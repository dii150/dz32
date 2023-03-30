

/*const textDiv = document.getElementById('textBox');
const text = textDiv.innerHTML;
const textEdit = document.getElementById('textEdit');
textEdit.value = text;*/

/*
document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === 'e' && e.ctrlKey) {
        textDiv.style.display = 'none';
        textEdit.style.display = 'block';
        textEdit.innerHTML = text;
    }
});*/

const textDiv = document.getElementById("textBox");
const textArea = document.createElement("textarea");
textArea.value = textDiv.innerHTML;

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "e") {
        e.preventDefault();
        textArea.innerHTML = textDiv.innerHTML;
        textDiv.parentNode.replaceChild(textArea, textDiv);
        textArea.focus();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        textDiv.innerHTML = textArea.value;
        textArea.parentNode.replaceChild(textDiv, textArea);
    }
});
