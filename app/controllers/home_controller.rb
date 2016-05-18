class HomeController < ApplicationController
  def index
    @posts = Post.all
  end
  
  def send_msg
    p = Post.new
    p.content = params[:nickname]
    p.content = params[:content]
    p.save
    
     Pusher['onlyone'].trigger('new_message', {
      message: params[:content]
    })
    
   
    render :text => ""
  end
end
