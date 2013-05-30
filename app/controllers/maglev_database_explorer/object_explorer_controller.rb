module MaglevDatabaseExplorer
  class ObjectExplorerController < ApplicationController
    def index
      if request.port == MaglevDatabaseExplorer.application_port
        redirect_to "#{request.protocol}#{request.host}:#{MaglevDatabaseExplorer.debug_port}#{request.fullpath}"
      end    
    end
  end
end
