var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var wow = {
    title: 'HI',
    heading: 'What to do What not to do',
    date:'september 2017',
    context:`how to create a html file
                 
                    View your document with an internet browser. ...
                    Understand markup tags. ...
                    Write your first tag. ...
                    Fill out theportion of your document. ...
                    Creat section. ...
                    Add text in various styles. ...
                    Divide your text paragraphs`
    
};

function create (data){
    var title = data.title;
    var date = data.date;
    var context= data.context;
var htmltemp =`<!DOCTYPE html>
    <head>
        <title>
           $(title)
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <h5>What to do what not to do??</h5>
        <div>
            $(date)<br>
            <p class='text'>$(context)
            </p>
        </div>
            
        
    </body>
</html>
`;
    
return htmltemp;
}

app.get('/', function (req, res) {
  res.send(create(wow));
});

app.get('/read', function (req,res){
   res.send(create(wow));
});

app.get('/write', function (req,res){
    res.send(create(wow));
});

app.get('/comic', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'exp3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
