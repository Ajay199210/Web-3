const express = require('express');

const app = express();
const PORT = 8080;
const users = [
  // { nom: 'Test 1', courriel: 'test1@exemple.com', password: 'pass1' },
  // { nom: 'Test 2', courriel: 'test2@exemple.ca', password: 'pass2' },
  // { nom: 'Test 3', courriel: 'test3@exemple.net', password: 'pass3' },
];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/css`));
app.use(express.static(`${__dirname}/scripts`));

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login', (req, res) => {
  try {
    const user = users.find(
      (u) => req.body.courriel === u.courriel && req.body.password === u.password,
    );
    res.render('index.ejs', { nom: user.nom });
  } catch (error) {
    console.log(error);
    // console.log("L'utilisateur n'existe pas !");
    res.redirect('/login');
  }
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', (req, res) => {
  try {
    users.push({
      nom: req.body.nom,
      courriel: req.body.courriel,
      password: req.body.password,
    });
    res.redirect('/login');
  } catch (error) {
    console.log(error);
    res.redirect('/register');
  }
  console.log(users);
});

app.listen(PORT, () => {
  console.log('Le serveur est lancé: http://localhost:8080');
});
