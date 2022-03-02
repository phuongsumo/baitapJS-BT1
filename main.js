const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Bài 1
const quest1 = () => {
    const text = $("#question1 .text");
    const btn = $("#question1 .btn");
    console.log(btn);
    btn.onclick = () => {
        console.log("click");
        text.style.color = "green";
        text.style.fontSize = "50px";
    }
}
quest1();

// Bài 2
const quest2 = () => {
    const elementA = $("#question2 .link");
    const btn = $("#question2 .btn");
    btn.onclick = () => {
        const nodeA = elementA.attributes;
        const arr = [];
        for (let i = 0; i < nodeA.length; i++) {
            arr.push(`${nodeA[i].nodeName}: ${nodeA[i].value}`)
        }
        alert(`Các attributes là: ${arr}`)
    }
}
quest2();

// Bài 3
const quest3 = () => {
    const btn = $("#question3 .btn");
    btn.onclick = () => {
        const table = $(".question3_table");
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";
    }
}
quest3();

// Bài 4
const quest4 = () => {
    const btn = $("#question4 .btn");
    const input = $("#question4 input");
    const output = $("#question4 .output")
    btn.onclick = () => {
        const arr = [...input.value]
        const sortText = arr.sort();
        output.innerHTML = sortText;
    }
}
quest4();

// Bài 5
const quest5 = () => {
    const btn = $("#question5 .btn");
    const input = $("#question5 input");
    const output = $("#question5 .output");
    btn.onclick = () => {
        const splitStr = input.value.toLowerCase().split(" ");
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        output.innerHTML = splitStr.join(" ")
    }
}
quest5();

// Bài 6
const quest6 = () => {
    const btn = $("#question6 .btn");
    const input = $("#question6 input");
    const output = $("#question6 .output");
    btn.onclick = () => {
        const splitStr = input.value.split(" ");
        const sortStr = splitStr.sort((a, b) => b.length - a.length)
        output.innerHTML = sortStr[0];
    }
}
quest6();