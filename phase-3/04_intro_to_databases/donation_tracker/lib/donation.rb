class Donation

    @@all = [] 

    attr_accessor :amount, :date 

    def initialize(attributes) 
        attributes.each do |key, value| 
            self.send("#{key}=", value) 
        end
        save
    end

    def save 
        @@all << self 
    end 

    def self.all 
        @@all
    end 

end 