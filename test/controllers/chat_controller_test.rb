require 'test_helper'

class ChatControllerTest < ActionController::TestCase
  test "should get chatroom" do
    get :chatroom
    assert_response :success
  end

  test "should get new_message" do
    get :new_message
    assert_response :success
  end

end
