class ChatController < ApplicationController
  def chatroom
  end

  def new_message
    Pusher['chatroom'].trigger('new_chat', {
      message: params[:message]
    })
  end
end
