class Donation

    attr_accessor :amount, :date, :organization_id 
    attr_reader :id

    # attr_accessor is creating these two methods:
    # def amount 
    #     @amount 
    # end 

    # def amount=(amount)
    #     @amount = amount 
    # end 
    
    def initialize(attributes) 
        attributes.each do |key, value| # malware
            binding.pry
            if self.respond_to?("#{key.to_s}=") # amount=
                self.send("#{key.to_s}=", value) # this is invoking the setter method for the key
            end 
        end

    end

    # 1st step: create a ruby object for donations
    # 2nd step: save that ruby object as a DB record

    def save # .save
        if self.id
            self.update
        else 
            sql = <<-SQL
                INSERT INTO donations (amount, date, organization_id) VALUES (?, ?, ?);
            SQL

            DB.execute(sql, self.amount, self.date, self.organization_id)
            @id = DB.last_insert_row_id
        end 
        self # instance 
    end

    def update 
        sql = <<-SQL
           UPDATE donations SET amount = ?, date = ?, organization_id = ? WHERE id = ?
        SQL

        DB.execute(sql, self.amount, self.date, self.organization_id, self.id)
        self
    end

    def self.all 
        array_of_hashes = DB.execute("SELECT * FROM donations")
        array_of_hashes.map do |hash|
            binding.pry
          self.new(hash)
        end
    end

    def self.create_table # create_table 
        sql = <<-SQL
        CREATE TABLE IF NOT EXISTS donations (
            id INTEGER PRIMARY KEY, 
            amount INTEGER,
            date INTEGER,
            organization_id INTEGER
        );
        SQL
        DB.execute(sql)
        # DB[:conn].execute(sql)
    end 

    def name 
        puts "testing send!!!"
    end 

end 


# invoke upon the initializ method
donation = Donation.new(amount: 100, date: 101421, organization_id: 1)

# save the ruby object as a db record
donation.save