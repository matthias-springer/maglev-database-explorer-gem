Standalone::Application.routes.draw do
  mount MaglevDatabaseExplorer::Engine => "/maglev-database-explorer"

  match "/" => "main#index"
  match "/halt" => "main#halt"
end
