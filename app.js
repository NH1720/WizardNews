const express = require("express");
const morgan = require("morgan")
const {list, find} = require("./postBank");

const app = express();

app.use(morgan("dev"));
app.use(express.static('./public'))

app.get("/", (req, res) => {
  const posts = list(); 

  const html = 
`  <!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
  </head>
  <body>
    <ul>
      ${posts.map(post => `
      <li>
        <h4>${post.title}</h4>
        <h5>${post.name}</h5>
      </li>`).join("")}
    </ul>
  </body>
  </html>`
  res.send(html)
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
