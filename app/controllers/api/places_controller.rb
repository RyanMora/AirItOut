class Api::PlacesController < ApplicationController

  def index
    @places = Place.all
    if params[:query]
      @places = Place.search(params[:query], @places)
    elsif params[:price] && params[:price].any?{|k, v| v == "true"}
      prices = []
      params[:price].each do |k, v|
        prices.push(k.to_i) if v == "true"
      end

      @places = Place.where('price IN (?)', prices)
    end
    render :index
  end

  def show
    @place = Place.find(params[:id])
    render :show
  end
  
end
