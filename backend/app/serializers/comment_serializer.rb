class CommentSerializer
  include JSONAPI::Serializer
  attributes :content, :post_id
end
