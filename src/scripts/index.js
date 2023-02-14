import { posts, suggestUsers } from "./database.js";
import { registerPost } from "./register.js";
import { render, renderSugestao } from "./render.js";

renderSugestao(suggestUsers)
render(posts)
registerPost(posts)