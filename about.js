function loadPage(file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(err => console.error("Error loading file:", err));
}

// By default, load About
window.onload = () => loadPage("about.html");
