async function loadLogs() {

    const response = await fetch("logs/index.json");
    const logs = await response.json();

    const timeline = document.getElementById("timeline");
    const devlog = document.getElementById("devlog");
    
    logs.reverse();

    logs.forEach(async (log, index) => {

        // Create a URL-friendly id from the title, falling back to index if needed
        const slug = log.title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || `entry-${index}`;

        // Timeline entry (now a link to the matching post)
        timeline.innerHTML += `
    <a class="timeline-item" href="#${slug}">
        <strong>${log.date}</strong><br>
        <span class="timeline-title">${log.title}</span>
    </a>
`;

        // Load markdown
        const md = await fetch(`logs/${log.file}`);
        const markdown = await md.text();

        // Convert markdown → HTML
        const html = marked.parse(markdown);

        const article = document.createElement("article");
        article.id = slug;
        article.innerHTML = html;

        devlog.appendChild(article);

    });

}

loadLogs();