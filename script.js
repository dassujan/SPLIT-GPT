function splitParagraph() {
    var paragraph = document.getElementById("paragraph").value;

    if (!paragraph) {
        document.getElementById("log").textContent = "Please enter a paragraph.";
        return;
    }

    if (paragraph.length < 1500) {
        document.getElementById("log").textContent = "Prompt is too short for splitting paragraph";
        return;
    }

    var existingOutput = document.getElementById("output");
    if (existingOutput) {
        existingOutput.innerHTML = '';
    }

    var chunkSize = Math.ceil(paragraph.length / 10);
    var chunks = [];
    for (var i = 0; i < paragraph.length; i += chunkSize) {
        chunks.push(paragraph.slice(i, i + chunkSize));
    }

    for (var i = 0; i < chunks.length; i++) {
        var chunk = document.createElement("p");
        chunk.textContent = chunks[i];
        chunk.className = "chunk";
        existingOutput.appendChild(chunk);
    }
}