const posts = require('../db/db.js')

const index = (req, res) => {
    let html = '';

    posts.forEach(post => {
        const { title, content, image } = post;

        return html +=
        `
        <li>
            <h3>${title}</h3>
            <p>${content}</p>
            <img src="/imgs/posts/${image}"</img> <br>
        </li>
        `
    })
    return res.send(`<ul>${html}</ul>`)
}


module.exports = {
    index
}