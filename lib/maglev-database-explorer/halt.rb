module MaglevDatabaseExplorer
  class << self
    def halt
      halt_proc = Proc.new do
        nil.pause
      end

      halt_proc.__call_and_rescue do |eval_result|
        is_exception = eval_result[0]

        if is_exception
          Thread.current.__set_exception(eval_result[1])
          eval_result[1] = Thread.current
          
          halted_threads.push(Thread.current)
          Thread.stop
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
