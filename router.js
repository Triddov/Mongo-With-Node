import { Router } from "express";
import Post from "./postScheme.js";

const router = new Router()


// router.get("/posts")
//
// router.get("/posts/:id")

router.post("/posts", async (req, res) => {
    try {
        const {author, title, content, picture} = req.body
        const post = await Post.create({author, title, content, picture})
        res.status(201).json(post)

    } catch (err) {
        res.status(500).json(err)
    }
})

// router.put("/posts")
//
// router.delete("/posts/:id")


export default router



