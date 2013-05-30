if Object.const_defined?(:MaglevRecord)
  puts "MaglevRecord is present."

  module MaglevRecord::Base
    def __basetype
      :maglevRecordBase
    end

    def to_database_view(depth, ranges = {}, params = {})
      obj = super

      if depth > 0
        index = 1

        obj[:attributes] = {}
        obj[:attributesSize] = @maglev_attributes.size

        range_from = ranges[:attributes] ? Integer(ranges[:attributes][0]) : 1
        range_to = ranges[:attributes] ? Integer(ranges[:attributes][1]) : 0

        if (params[:allElements])
          range_from = 1
          range_to = @maglev_attributes.size
        end

        @maglev_attributes.each do |k, v|
          if (index >= range_from)
            if (index > range_to)
              break
            else
              obj[:attributes][index] = [k.to_database_view(depth - 1, {}, params), v.to_database_view(depth - 1, {}, params)]
            end
          end

          index = index + 1
        end
      end

      return obj
    end
  end
end

