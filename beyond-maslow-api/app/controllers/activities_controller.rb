class ActivitiesController < ApplicationController

  def index
    # Are they actually being displayed most recent first? Can't tell until real data is added.
    @activities = Activity.order("created_at DESC")
    render json: @activities
  end

  def create
    @activity = Activity.create(activity_params)
    @activity.completed = false
    render json: @activity
  end

  def update
    @activity = Activity.find(params[:id])
    @activity.update_attributes(activity_params)
    render json: @activity
  end

  def destroy
    @activity = Activity.find(params[:id])
    if @activity.destroy
      head :no_content, status: :ok
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  private

  def activity_params
    params.require(:activity).permit(:title, :body, :cost, :category, :completed)
  end

end
