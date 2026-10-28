
async function loadLogs() {
    const response = await fetch("logs/index.json");
    const logs = await response.json();

    const timeline = document.getElementById("timeline");
    const devlog = document.getElementById("devlog");

    logs.reverse();

    for (const [index, log] of logs.entries()) {
        const slug = log.title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || `entry-${index}`;

        timeline.innerHTML += `
            <a class="timeline-item" href="#${slug}">
                <strong>${log.date}</strong><br>
                <span class="timeline-title">${log.title}</span>
            </a>
        `;

        const md = await fetch(`logs/${log.file}`);
        const markdown = await md.text();
        const html = marked.parse(markdown);

        const article = document.createElement("article");
        article.innerHTML = html;

        // Put the ID on the post's title heading
        const heading = article.querySelector("h1, h2, h3");

        if (heading) {
            heading.id = slug;
        } else {
            article.id = slug;
        }

        devlog.appendChild(article);
    }
}

loadLogs();

document.getElementById("timeline").addEventListener("click", (e) => {
    const link = e.target.closest(".timeline-item");
    if (!link) return;

    e.preventDefault();

    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    history.pushState(null, "", `#${targetId}`);
});
