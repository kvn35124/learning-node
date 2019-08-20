let path = require('path');
let fs = require('fs');

let rp = require('request-promise');

const dataPath = path.join(__dirname, '/downloads');

console.log(dataPath);

rp('https://reddit.com/r/popular.json')
.then(data => {
    let articles = JSON.parse(data);
    articles.data.children.forEach(article => {
        
        let fileName = article.data.id;
         
        let ext = path.extname(article.data.url);

        if (ext === '.jpg' || ext === '.png') {
            rp(article.data.url)
            .then(image => {
                fs.writeFile(path.join(__dirname, `/downloads/${fileName}`), image, (err) => {
                    if(err) {
                        console.log(err);
                    }
                })
            })
        }
    });
})