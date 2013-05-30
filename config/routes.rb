MaglevDatabaseExplorer::Engine.routes.draw do
  get "/" => "ObjectExplorer#index"

  match "/object/index/:id" => "Object#index"
  match "/object/evaluate/:id" => "Object#evaluate"

  match "/code/selectors/:id" => "Code#selectors"
  match "/code/code/:id" => "Code#code"
  match "/code/frame/:id" => "Code#frame"
  match "/code/frames/:id" => "Code#frames"
  match "/code/stepInto/:id" => "Code#stepInto"
  match "/code/proceed/:id" => "Code#proceed"
  match "/code/trim/:id" => "Code#trim"
  match "/code/stepOver/:id" => "Code#stepOver"
end
