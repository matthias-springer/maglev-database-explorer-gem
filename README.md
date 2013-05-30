MagLev Database Explorer
========================

MagLev Database Explorer is a Rails application that allow you to view and modify objects persisted in MagLev/GemStone and to debug Rails applications. MagLev Database Explorer is a Rails Engine that can be integrated in your Rails application. 


Installation
============

You can use MagLev Database Explorer as a Rails Engine or as a stand-alone application, in order to use together with non-Rails application.

Rails Engine
------------

Download the Gem source code, build the Gem and install it. Alternatively, install the Gem from Rubygems.

```gem install maglev-database-explorer```

Add the Gem the Gemfile of your Rails application.

Add a route to your Rails application. You can currently not change the name of the route.

```ruby
Rails.application.routes.draw do
  mount MaglevDatabaseExplorer::Engine => "/maglev-database-explorer"
end
```

Run your application.

```
rails server
```

You can access MagLev Database Explorer at this URL: ```http://hostname:3001/maglev-database-explorer/```

*Note:* MagLev Database Explorer spawns a second web server for debugging purposes. The port number is always the default port incremented by one.

Stand-alone application
-----------------------

There's currently no proper support for running MagLev Database Explorer stand-alone. You can clone the Github repository and start the Rails application in the directory ```test/dummy```. You can access MagLev Database Explorer at ```http://hostname:3001/maglev-database-explorer/```.


Rails Debugging
===============

You can debug Rails application by executing the following statement in your application code.

```ruby
MaglevDatabaseExplorer.halt
```

There are currently *no* automatic Rails exception handlers that automatically spawn a debug session for Rails expcetions.

Explore and modify objects in your Rails application running on MagLev.
