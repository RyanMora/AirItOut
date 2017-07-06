class Api::ReviewsController < ApplicationController

  def index
    place = Place.find(params[:place_id])
    @reviews = place.reviews
    render :index
  end

  def show
    @review = Review.find_by(place_id: params[:place_id], id: params[:id])
    render :show
  end

  def create
    @review = Review.create(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:place_id, :user_id,
                                  :review_text, :rating, :photo_url )
  end
  
end
