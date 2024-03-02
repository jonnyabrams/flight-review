class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :content, :score, :airline_id
end
