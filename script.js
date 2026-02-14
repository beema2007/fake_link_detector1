function checkLink() {

    let url = document.getElementById("urlInput").value;
    let risk = 0;

    let suspiciousWords = ["free", "win", "login", "verify", "bank", "update"];

    // Check HTTPS
    if (!url.startsWith("https://")) {
        risk++;
    }

    // Check suspicious words
    for (let word of suspiciousWords) {
        if (url.toLowerCase().includes(word)) {
            risk++;
            break;
        }
    }

    // Check long URL
    if (url.length > 30) {
        risk++;
    }

    // Check numbers
    if (/\d/.test(url)) {
        risk++;
    }

    let result = document.getElementById("result");

    if (risk >= 3) {
        result.innerHTML = "🔴 Dangerous Link!";
        result.style.color = "red";
    }
    else if (risk == 2) {
        result.innerHTML = "🟡 Suspicious Link!";
        result.style.color = "orange";
    }
    else {
        result.innerHTML = "🟢 Safe Link!";
        result.style.color = "green";
    }
}
