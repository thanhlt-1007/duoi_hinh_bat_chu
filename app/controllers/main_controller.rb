class MainController < ApplicationController
  def index
    @answers = Settings.answers
  end
end
