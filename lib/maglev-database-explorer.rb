require "maglev-database-explorer/engine"
require "maglev-database-explorer/database_views"
require "maglev-database-explorer/engine_symlinks"
require "maglev-database-explorer/ruby_workspace"
require "maglev-database-explorer/code_evaluation"
require "maglev-database-explorer/webrick_dual_server"
require "maglev-database-explorer/halt"

# Workaround for Engines not working correctly on MagLev
module MaglevDatabaseExplorer
  module ApplicationHelper

  end

  class ApplicationController < ActionController::Base
  end
end
