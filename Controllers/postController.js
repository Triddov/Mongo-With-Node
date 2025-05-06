import Post from "../postScheme.js";

class PostController {

    async create(req, res){
        try {
            const {author, title, content, picture} = req.body
            const post = await Post.create({author, title, content, picture})
            res.status(201).json(post)

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async getOne(req, res){
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({errMessage: "post id not found"})
            }

            const post = await Post.findById(id)
            return res.status(200).json(post)

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async getAll(req, res){
        try {
            const posts = await Post.find()
            return res.status(200).json(posts)

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async update(req, res){
        try {
            const post = req.body
            if (!post._id) {
                res.status(400).json({errMessage: "post id not found"})
            }

            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.status(200).json(updatedPost)
        //     если бы мы ничего не возврашали, я бы поставил 204 статус

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({errMessage: "post id not found"})
            }

            const post = await Post.findByIdAndDelete(id)
            return res.status(200).json(post)

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

}


export default new PostController