module MaglevDatabaseExplorer
  def self.ensure_debug_server_running!
    if not @debug_server
      @debug_server = Rails::Server.new
      @debug_server.options[:Port] += 1
      @debug_server.options[:pid] = false

      Thread.start do
        @debug_server.start
      end
    end 
  end

  def self.debug_port
    ensure_debug_server_running!
    @debug_server.options[:Port]
  end

  def self.application_port
    @application_port ||= Rails::Server.new.options[:Port]
  end
end
