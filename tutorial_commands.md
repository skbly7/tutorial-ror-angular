1) Learn MVC structure after following these steps.

```
    rails new ssad
    cd ssad
    rails generate scaffold  # READ HELP DISPLAYED
    rails generate scaffold project title description:text owner is_public:boolean
```

2) For making REST APIs, install gem `rails-api`, and scaffold using it. 

- Here are the steps which will generate API structure as required in Assignment i.e. /models, /model/:id :

```
        rails-api new ssad_api
        cd ssad_api
        sudo bundle install
        rails-api generate scaffold project title description:text owner is_public:boolean
```

3) Data encapsulation

This part is easy in rails using serializer gem.
Here are the steps:
    
Open `Gemfile` (it contains list of all gems using in rails app), and add gem:

`gem 'active_model_serializers', '~> 0.8.3'`

Now for example you wish to hide owner name in projects api. Just do:

```
rails g serializer project
```

(now only id would be public, and everything else private variable)

To make title, description public variable (i.e. accessable through API)

```
    Goto app/serializers
    Edit project_serializer.rb
    Change 'attributes :id' to 'attributes :id, :title, :description' and so on..
```

Checkout rails application in folder `/final_practice/api_users/` for it's use. Have used it on users model.

Hint: You can add custom functions as parameter also. Useful when you need to send comments along with issues API say, and so on. (Depends on your implementation)


4) Token based authentication (Extra - Not covered in tutorial)

There are many ways to handle token based authentication. Here is one strategy which I would like to share.
Rails controller has 'before_action' hook, on which you can add as many custom made function.

Make a custom function for validation authentication token, and add it into this hook.
You can see how to add custom function with **'before_action'** in this file :
`/with_angular/app/controllers/users_controller.rb`


All the best..! :)