class Api::PlacesController < ApplicationController
  def index
    @places = Place.all
    render :index
  end

  def show
    @place = Place.find(params[:id])
  end

  def create
    @place = Place.create!(place_params)
    render :show
  end

  private

  def place_params
    params.require(:place).permit(:lat, :lng, :description, :picture_url, :type_of_business)
  end
end
