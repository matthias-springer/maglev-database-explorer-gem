module MaglevDatabaseExplorer
  class << self
    def install_rails_debugger
      require "maglev-database-explorer/action_controller_debug_patch"
    end

    def halt(inner_exception = nil)
      halt_proc = Proc.new do
        nil.pause
      end

      halt_proc.__call_and_rescue do |eval_result|
        is_exception = eval_result[0]

        if is_exception
          if inner_exception == nil
            Thread.current.__set_exception(eval_result[1])
          else
            Thread.current.__set_exception(inner_exception)
          end

          Thread.current[:is_rails_thread] = true
          eval_result[1] = Thread.current
          
          halted_threads.push(Thread.current)
          Thread.current[:manual_stop] = true
          Thread.stop
          Thread.current[:manual_stop] = false
          halted_threads.delete(Thread.current)
          eval_result[1].__exception.__resume
        else
          puts "ERROR: expected a Halt. __call_and_rescue not working correctly."
          Thread.current.__set_exception(nil)
        end
      end
    end

    def halted_threads
      @halted_threads ||= []
    end
  end
end
