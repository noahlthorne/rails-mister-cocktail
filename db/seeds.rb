require 'open-uri'
require 'json'
puts 'Creating new ingredients...'

Ingredient.delete_all
url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
url_serialized = URI.parse(url).read
ingredients = JSON.parse(url_serialized)
ingredients['drinks'].each do |ingredient|
  Ingredient.create(name: ingredient['strIngredient1'])
end

puts 'Finished creating ingredients!'
