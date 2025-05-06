import PostService from "../Services/postService.js";
import postService from "../Services/postService.js";

class PostController {

    async create(req, res){
        try {
            const post = await PostService.create(req.body, req.files.picture)
            return res.status(201).json(post)

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async getOne(req, res){
        try {
            const post = await PostService.getOne(req.params.id)
            return res.status(200).json(post)

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async getAll(req, res){
        try {
            const posts = await PostService.getAll()
            return res.status(200).json(posts)

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async update(req, res){
        try {
            const updatedPost = await PostService.update(req.body)
            return res.status(200).json(updatedPost)
        //     если бы мы ничего не возврашали, я бы поставил 204 "no content"

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async delete(req, res){
        try {
            const post = await postService.delete(req.params.id)
            return res.status(200).json(post)

        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}


export default new PostController
