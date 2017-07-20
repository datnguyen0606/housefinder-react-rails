class HomeController < ApplicationController
  skip_before_filter :verify_authenticity_token
  require 'net/http'

  def index
  end

  def fetch_properties
    result = Net::HTTP.get(URI.parse(params[:uri]))
    render json: result
  end
end
