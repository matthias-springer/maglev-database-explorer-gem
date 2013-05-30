module MaglevDatabaseExplorer
  class Engine < ::Rails::Engine
    isolate_namespace MaglevDatabaseExplorer
  end

  def self.full_gem_path
    gem = Gem.loaded_specs["maglev-database-explorer"]
    gem.full_gem_path
  end
end

