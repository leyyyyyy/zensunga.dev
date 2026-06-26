async function loadLogs() {

    const response = await fetch("logs/index.json");
    const logs = await response.json();

    const timeline = document.getElementById("timeline");
    const devlog = document.getElementById("devlog");

    for (const log of logs) {

        // Timeline entry
        timeline.innerHTML += `
            <p class="timeline-item">
                <strong>${log.date}</strong><br>
                ${log.title}
            </p>
        `;

        // Load markdown
        const md = await fetch(`logs/${log.file}`);
        const markdown = await md.text();

        // Convert markdown → HTML
        const html = marked.parse(markdown);

        const article = document.createElement("article");
        article.innerHTML = html;

        devlog.appendChild(article);
    }

}

loadLogs();