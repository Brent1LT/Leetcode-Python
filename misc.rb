class Hotel
  attr_accessor :rooms
  def initialize
    @rooms = Hotel.make_rooms
  end  

  def self.make_rooms
    @rooms = 12
  end   

  def count 
    @rooms += 1
  end  

  def add 
    self.count
  end  
  
  def render
    self.rooms = 24
    p self.rooms
  end 
end 

hotel = Hotel.new
p hotel
hotel.add
p hotel
hotel.render