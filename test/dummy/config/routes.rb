Rails.application.routes.draw do

  mount MaglevDatabaseExplorer::Engine => "/maglev-database-explorer"

  match ':controller(/:action(/:id))(.:format)'
end
