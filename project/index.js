const addSign = document.querySelector(".add-sign");
addSign.addEventListener("click", () => {
    input.style.display = "block";
});
const text = document.querySelector(".text");
const input = document.querySelector(".input");
const ul = document.querySelector("ul");
function process() {
        input.style.display = "none";
        const li = document.createElement("li");
        li.innerText = input.value;
        let span = document.createElement("span");
        let img = document.createElement("img");
        img.setAttribute("src", "img/delete.png");
        img.setAttribute("class", "remove");
        li.style.listStyleType = "none";
        span.append(img);
        li.append(span);
        ul.append(li);
        input.value = "";
};
text.addEventListener("click", process);

myList.addEventListener("click", (e) => {
    if (e.target.tagName = "img") {
        e.target.parentElement.parentElement.remove();
    };
});



