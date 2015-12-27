class LaunchController < ApplicationController
  def root
    @form = {
      :action => user_registration_path,
      :csrf_param => request_forgery_protection_token,
      :csrf_token => form_authenticity_token
    }
  end
end