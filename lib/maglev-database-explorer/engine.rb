module MaglevDatabaseExplorer
  class Engine < ::Rails::Engine
    isolate_namespace MaglevDatabaseExplorer

    initializer "maglev-database-explorer" do |app|
      app.config.threadsafe!

      app.config.after_initialize do
        MaglevDatabaseExplorer.ensure_debug_server_running!
      end
    end
  end

  def self.full_gem_path
    gem = Gem.loaded_specs["maglev-database-explorer"]
    gem.full_gem_path
  end

  def self.eval_object
    @eval_object ||= Object.new
  end

end

