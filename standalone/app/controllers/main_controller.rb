class MainController < ApplicationController
  def index
  end

  def halt
    text = "Triggering a halt at #{Time.new}\n"
    MaglevDatabaseExplorer.halt
    text += "Continuing after halt at #{Time.new}\n"

    render :text => text
  end
end
