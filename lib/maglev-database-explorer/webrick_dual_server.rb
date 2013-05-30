# Patching Rack to create two WEBrick servers
if Rack::Handler::WEBrick == nil
  puts "ERROR: WEBrick Rack handler not found. Cannot apply dual server patch."
  exit
end

Rack::Handler::WEBrick.singleton_class.alias_method(:run_single, :run)

class Rack::Handler::WEBrick
  def self.run(app, options = {}, &block)
    puts "self.run"
    options_second = options.dup
    options_second[:Port] = options_second[:Port] + 1

    Thread.start do
      run_single(app, options_second, &block)
    end

    run_single(app, options, &block)
  end
end
