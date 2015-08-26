json.array!(@projects) do |project|
  json.extract! project, :id, :title, :description, :is_public, :owner
  json.url project_url(project, format: :json)
end
