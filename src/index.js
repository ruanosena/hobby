import { marked } from "marked";
import "github-markdown-css";

async function markdown() {
	const content = await fetch("https://raw.githubusercontent.com/ruanosena/hobby/refs/heads/main/README.md").then(
		(res) => res.text()
	);
	return marked(content);
}

document.body.innerHTML = await markdown();
document.body.classList.add("markdown-body");
