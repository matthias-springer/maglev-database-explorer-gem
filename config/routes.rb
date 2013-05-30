MaglevDatabaseExplorer::Engine.routes.draw do
  get "/" => "ObjectExplorer#index"

  get "/object/index/:id" => "Object#index"
  post "/object/evaluate/:id" => "Object#evaluate"

  post "/code/selectors/:id" => "Code#selectors"
  post "/code/code/:id" => "Code#code"
  post "/code/frame/:id" => "Code#frame"
  post "/code/frames/:id" => "Code#frames"
  post "/code/stepInto/:id" => "Code#stepInto"
  post "/code/proceed/:id" => "Code#proceed"
  post "/code/trim/:id" => "Code#trim"
  post "/code/stepOver/:id" => "Code#stepOver"
end
