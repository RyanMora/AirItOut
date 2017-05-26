class Api::placeesController < ApplicationController
  def index
    @places = Place.all
    render :index
  end

  def show
    @place = place.find(params[:id])
  end

  def create
    @place = place.create!(place_params)
    render :show
  end

  private

  def place_params
    params.require(:place).permit(
      :lat,
      :lng,
      :description,
      :type_of_business,
      :picture_url
    )
  end
  # 
  # def bounds
  #   params[:bounds]
  # end
end
