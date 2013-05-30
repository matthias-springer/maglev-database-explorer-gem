class DemoAppController < ApplicationController
  def index
    MaglevDatabaseExplorer.halt
    render :text => "This is a dummy application controller."
  end
end
