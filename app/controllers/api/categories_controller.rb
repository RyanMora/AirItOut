class Api::CategoriesController < ApplicationController

  def index
    category = params[:name].downcase
    @categories = Category.all.where('lower(category_type) LIKE ?', "%#{category}%")
    @categories = @categories[0..6]
    render :index
  end
  
end
