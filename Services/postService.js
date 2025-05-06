import Post from "../postScheme.js";
import fileService from "./fileService.js";

class PostService{
    async create(post, picture){
        const fileName = fileService.saveFile(picture)
        const createdPost = await Post.create({...post, picture: fileName})
        return createdPost
    }

    async getOne(id){
        if (!id) {
            throw new Error("id not found")
        }
        const post = await Post.findById(id)
        return post
    }

    async getAll(){
        const posts = await Post.find()
        return posts
    }

    async update(post){
        if (!post._id) {
            throw new Error("id not found")
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost
    }

    async delete(id){
        if (!id) {
            throw new Error("id not found")
        }
        const post = await Post.findByIdAndDelete(id, {new: true})
        return post
    }
}

export default new PostService()
