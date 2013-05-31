module MaglevDatabaseExplorer
  def self.debug_storage
    @debug_storage ||= {}
  end

  def self.store_debug_object(obj)
    debug_storage[obj.object_id] = obj
  end
end

