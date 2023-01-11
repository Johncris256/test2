function testGS(){

const url = "https://script.google.com/macros/s/AKfycbx1gVTqTT_BZI4EZ7aXLnP63Wp0ATNYjcF73ZHan39IS-86KcBWSSLXmT2CuME9yFEq/exec"


fetch(url)
    .then(d => d.json())
    .then(d => {
            document.getElementById("app").textContent = d[0].status;
    });

}

document.getElementById("btn").addEventListener("click",testGS);