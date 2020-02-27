const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');
const cookieParser = require('cookie-parser');

const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use(
    session({
        secret: '@teamTB', // 비밀번호
        resave: false, // 세션 데이터가 바뀌기 전까지는 세션 데이터의 값을 저장하지 않는다
        saveUninitialized: true // 세션이 필요하기 전까지는 세션을 구동 시키지 않는다. 
    })
);

app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).send('Success');
    console.log(req.session);
});

app.use('/signup', signupRouter);
app.use('/login', loginRouter)

app.listen(port, () => 
console.log(`Example app listening on port ${port}!`));