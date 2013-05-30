create_public_link = "ln -sfT \"#{MaglevDatabaseExplorer.full_gem_path}/public\" \"#{Dir.getwd}/public/maglev-database-explorer\""

puts "Creating symlink: #{create_public_link}"

if not system(create_public_link)
  puts "ERROR: Failed to create symbolic link to public directory of MagLev Database Explorer with '#{create_public_link}'."
  exit
end

# Workaround for symlinks not working correctly on MagLev
create_views_link ="ln -sfT \"#{MaglevDatabaseExplorer.full_gem_path}/app/views/maglev_database_explorer\" \"#{Dir.getwd}/app/views/maglev_database_explorer\""

puts "Creating symlink: #{create_views_link}"

if not system(create_views_link)
  puts "ERROR: Failed to create symbolic link to views directory of MagLev Database Explorer."
  exit
end

