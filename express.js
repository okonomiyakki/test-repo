const express = require('express');
const app = express()

app.get('/hello', (req, res) => {
    res.send('test hello')
})

// get post put delete 3가지가 주로 있어요
// get은 데이터의 요청을
// post는 데이터의 생성을
// put은 수정을
// delete는 삭제를
// 하는 요청입니다.
// 간략하게는 그렇습니다.

window.addEventListener('popstate', () => {
    console.log('pop!')
})