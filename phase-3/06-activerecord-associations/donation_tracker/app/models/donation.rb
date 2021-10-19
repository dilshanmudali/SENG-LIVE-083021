class Donation < ActiveRecord::Base
    

    def self.total_donations
        self.sum(:amount)
    end

    def update_status
        self.update(completed: !self.completed)
    end

end 

