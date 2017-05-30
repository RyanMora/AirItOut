class Api::PlacesController < ApplicationController
  def index
    places = Place.all
    @places = places.includes(:reviews, :favorite_users)
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
