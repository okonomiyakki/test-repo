// hash 사용
const crypto = require('crypto');

module.exports = (password) => {
    const hash = crypto.createHash('sha1'); // sha1 은 알고리즘 종류 ... sha224, sha256 도 있음
    hash.update(password);
    return hash.digest("hex");
}


//회원가입 요청 처리
const { Router } = require('express');
const asyncHandler = require('../utils/async-handler');
const { User } = require('../models');
const router = Router();

router.post('/', async (req, res) => {
    const { email, name, password } = req.body
    const pwHash = getHash(password)
    const exists = await User.findOne({ email })

    if (exists) {
        throw new Error
    }

    await User.create({ email, name, password: pwHash })

    res.redirect('/')
})

router.post('/join', asyncHandler(async (req, res) => {
    const { email, name, password } = req.body;
    const hashedPassword = getHash(password)// 비밀번호 해쉬값 만들기
    const exists = await User.findOne({ email }) // 이미 존재하는지 email로 체크

    if (exists) {
        throw new Error  // 이미 회원이면 에러 반환
    }

    const user = await User.create({ email, name, password: hashedPassword }) // 처음 가입자면 회원 생성
    // password를 해시 값으로 저장

    console.log('신규 회원', user);

    res.redirect('/');  // 가입 완료 후 메인 화면으로 redirect
}));


// 로그인 기능 구현
// ./strategies/local
const config = {
    usernameField: 'email',
    passwordField: 'password',
}

const local = new localStrategy(config, async (email, password, done) => {
    try {
        const user = await User.findOne({ email }) // email로 회원 찾기
        if (!user) {
            throw new Error('회원을 찾을 수 없습니다.')
        }
        if (user.password !== password) {
            // user.password는 해시값이라 password도 해시처리 해야함
            throw new Error('비밀번호가 일치하지 않습니다!')
        }

        done(null, {  // 첫번 째 인자는 에러, 에러가 없다면 user 값 전달
            shortID: user.shortId,
            email: user.email,
            name: user.name,
        })
    }
    catch (err) {
        done(err, null)
    }
})


// Passport.js 설정
const local = require('./strategies/local')
passport.use(local)


//Passport.js로 로그인 요청 처리
// routes/auth.js
router.post('/', passpor.authenticate('local'))
// 'local' strategy 를 passpor.authenticate 함수에 전달
//  passport 가 자동으로 'local' strategy 를 사용하는 request 핸들러 생성

//app.js
const session = require('express-session')

app.use(session({ // passport 가 로그인 시 유저 정보를 세션에 저장하고 가져오는 동작을 자동으로 수행해 줌
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', authRouter)



//session 유저 활용
passport.serializeUser((user, callback) => {
    callback(null, user)
})

passport.deserializeUser((obj, callback) => {
    callback(null, obj)
})

// connect-mongo
const MongoStore = require('connect-mongo')

app.use(session({
    secret: 'SeCrEt',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongoUrl', })
}))