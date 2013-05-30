$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "maglev-database-explorer/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "maglev-database-explorer"
  s.version     = MaglevDatabaseExplorer::VERSION
  s.authors     = ["Matthias Springer", "Kirstin Heidler", "Dimitri Korsch", "Nicco Kunzmann", "Stefan Bunk"]
  s.email       = ["me@m-sp.org", "bp2012h1@hpi.uni-potsdam.de"]
  s.homepage    = "https://github.com/matthias-springer/maglev-database-explorer-gem"
  s.summary     = "MagLev Database Explorer"
  s.description = "Explore and modify objects in your Rails application."

  s.files = Dir["{app,config,db,lib,public}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 3.2.8"

  s.add_dependency "sqlite3"
end
