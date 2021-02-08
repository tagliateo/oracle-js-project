class PostsController < ApplicationController
    def index 
        render json: Post.all.map {|post| PostSerializer.new(post)}
    end 

    def show
        render json: @post
    end

    def create 
        post = Post.new(post_params)

        if post.save 
            render json: PostSerializer.new(post)
            
        else
            render json: {message: "Post could not be added"}, status: 400
        end
    end 

    def destroy 
        post = Post.find_by_id(params[:id])
        post.destroy
    end 

    private 

    def post_params
        params.require(:post).permit(:content) 
    end 
end
