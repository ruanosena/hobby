import { marked } from "marked";
import "github-markdown-css";

async function markdown() {
	const url = process?.env.NODE_ENV === "production" ? process.env.README_URL : "../README.md";
	const content = await fetch(url).then((res) => res.text());
	return marked(content);
}

document.body.innerHTML = await markdown();
document.body.classList.add("markdown-body");
