window.addEventListener("load", () => {

    // test api call
    fetch("http://localhost:5000/api")
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => {
            console.error("Fout bij de eerste connectie:", error);
        });


    // Test Database skills call
    fetch("http://localhost:5000/skills")
        .then(response => response.json())
        .then(data => {

            let html = `<ul>`
            for(let i = 0; i < data.length; i++) {
                html += `<li>${data[i].name} - ${data[i].skillLevel} - ${data[i].category} `
            }
            document.getElementById("message").innerHTML = html + '</ul>';

        })
        .catch(error => {
            console.error("Fout bij ophalen van skil data:", error);
            document.getElementById("message").innerText = "Fout bij laden van gegevens.";
        });
});