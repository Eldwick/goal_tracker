class LaunchController < ApplicationController
  def landing
  end
  
  def root
    if user_signed_in?
      redirect_to "/dashboard" 
    else
      @form = {
        :csrf_param => request_forgery_protection_token,
        :csrf_token => form_authenticity_token
      }
    end
  end
end