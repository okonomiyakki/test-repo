// /post?write=true 일떄
const { Router } = require('express')

const router = Router()

router.get('/', (req, res, next) => {
    if (req.query.write) {
        res.render('posts/edit')
        return
    }
})



// POST 요청하기
const { Psot } = require('./models')

router.post('/', async (req, res, nect) => {
    const { title, content } = req.body
    try {
        await Post.create({
            title,
            content,
        })
        res.redirect('/')
    }
    catch (err) {
        next(err)
    }
})



//게시글 목록 구현
router.get('/', async (req, res, next) => {
    const posts = await Post.find({})
    res.render('posts/list', { posts })
})




// 게시글 상세 구현
router.get('/:shortId', async (req, res, next) => {
    const { shortId } = req.params
    const post = await Post.findOne({ shortId })
    if (!post) {
        next(new Error('Post NotFound'))
        return
    }

    res.render('posts/view', { post })
})



// 수정 페이지
router.get('/:shortId', async (req, res, next) => {

    if (req.query.edit) {
        res.render('posts/edit', { post })
    }
})




// 수정 요청 처리
router.post('/:shortId', async (req, res, nect) => {
    const { shortId } = req.params
    const { title, content } = req.body
    const post = await Post.findOneAndUpdate({ shortId }, { title, content })
    if (!post) {
        next(new Error('Post NotFound'))
        return
    }
    res.redirect(`/posts${shortId}`)
})



// 삭제 요청 처리
const { Post } = require('./models')

router.delete('/:shortId', async (req, res, nect) => {
    const { shortId } = req.params
    try {
        await Post.delete({ shortId })
        res.send('OK')
    }
    catch (err) {
        next(err)
    }
})



// 에러 처리 - Async Request Handle
const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        try {
            await requestHandler(req, res)
        }
        catch (err) {
            next(err)
        }
    }
}

router.get('/', asyncHandler(async (req, res) => {
    const posts = await Posts.find({})
    if (posts.length < 1) {
        throw new Error('Not Found')
    }
    res.render('posts/list', { posts })
}))