class StaticPagesController < ApplicationController
  def home
    render component: 'Home'
  end

  def about
    render component: 'About'
  end
end
