class CommentsController < ApplicationController
    before_action :set_comment, only: [:destroy]

    def index 
        render json: Comment.all
    end 

    def create 
        comment = Comment.new(comment_params)

        if comment.save 
            render json: comment 
        else 
            byebug 
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
