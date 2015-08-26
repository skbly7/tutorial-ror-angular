
class MemberSerializer < ActiveModel::Serializer
  attributes :id, :email, :auth_token, :random
  def random
    return "hi"
   end
end
