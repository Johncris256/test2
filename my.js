function testGS(){

const url = "https://script.google.com/macros/s/AKfycbzJ0kAcWcWqZM_ZMy4RccLSR_q8RBbgRXKmvjMtR5JaVaW8mbrfQndMWFDwTt05BHvr/exec"


fetch(url)
    .then(d => d.json())
    .then(d => {
            document.getElementById("app").textContent = d[0].status;
    });

}

document.getElementById("btn").addEventListener("click",testGS);