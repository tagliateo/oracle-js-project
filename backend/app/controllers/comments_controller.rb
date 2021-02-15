class CommentsController < ApplicationController
    before_action :set_comment, only: [:destroy]

    def index 
        render json: Comment.all.map {|comment| CommentSerializer.new(comment)}
    end 

    def show
        render json: @comment
    end

    def create 
        comment = Comment.new(comment_params)

        if comment.save 
            render json: comment 
        else 
            render json: {message: "Comment could not be added"}, status: 400
        end 
    end 

    def destroy 
        comment.destroy
    end

    private

    def set_comment 
        comment = Comment.find(params[:id])
    end 

    def comment_params 
        params.require(:comment).permit(:content, :post_id)
    end 
end
