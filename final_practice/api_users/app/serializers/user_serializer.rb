class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :random

  def random
    rand(30)
  end
end
