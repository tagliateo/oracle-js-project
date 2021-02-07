class PostSerializer
  include JSONAPI::Serializer
  attributes :content, :comments
end
