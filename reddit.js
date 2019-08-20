let path = require('path');
let fs = require('fs');

let rp = require('request-promise');

const dataPath = path.join(__dirname, '/popular-articles.json');

// console.log(redditPath);

rp('https://reddit.com/r/popular.json')
    .then(data => {
        let articles = JSON.parse(data);

        let articleInfo = articles.data.children.map(article => {
            return {
                title : article.data.title,
                url: article.data.url,
                author: article.data.author
            }
        })
        
        fs.writeFile(dataPath, JSON.stringify(articleInfo), (err) => {
            if(err) console.log(err);
            console.log('Success');
        })
    })
