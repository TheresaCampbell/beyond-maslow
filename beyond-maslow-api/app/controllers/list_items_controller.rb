class ListItemsController < ApplicationController

  def index
    @list_items = ListItem.all
    render json: @list_items
  end

  def create
    @list_item = ListItem.create(list_item_params)
    @list_item.completed = false
    render json: @list_item
  end

  private

  def list_item_params
    params.require(:list_item).permit(:title, :body, :cost, :category, :completed)
  end

end
