export const transValidation = {
  email_incorrect: "Email phải có dạng example@gmail.com!",
  gender_incorrect: "Ủa, tại sao trường giới tính lại bị sai?",
  password_incorrect: "Mật khẩu phải chứa ít nhất 6 ký tự",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác.",
  update_username: "Tên người dùng giới hạn trong khoảng 3-17 kí tự và không được phép chứa kí tự đặc biệt.",
  update_gender: "Lỗi! Dữ liệu giới tính có vấn đề, bạn là hacker chăng?",
  update_address: "Địa chỉ giới hạn trong khoảng 3-30 kí tự.",
  update_phone: "Số điện thoại Việt Nam bắt đầu bằng số 0, giới hạn trong khoảng 10-11 kí tự.",
  keyword_find_user: "Lỗi từ khóa tìm kiếm, chỉ cho phép ký tự chữ cái và số, cho phép khoảng trống.",
  message_text_emoji_incorrect: "Tin nhắn không hợp lệ. Đảm bảo tối thiểu 1 ký tự, tối đa 400 ký tự.",
  add_new_group_users_incorrect: "Vui lòng chọn bạn bè để thêm vào nhóm, tối thiểu 2 người.",
  add_new_group_name_incorrect: "Vui lòng nhập tên cuộc trò chuyện, giới hạn 5-30 ký tự và không chữa các ký tự đặc biệt."
};

export const transErrors = {
  account_in_use: "Email này đã được sử dụng.",
  account_removed: "Tài khoản này đã bị gỡ khỏi hệ thống, nếu tin rằng điều này là hiểu nhầm, vui lòng liên hệ lại với bộ phận hỗ trợ của chúng tôi.",
  account_not_active: "Email này đã được đăng ký nhưng chưa kích hoạt tài khoản, vui lòng kiểm tra email của bạn hoặc liên hệ lại với bộ phận hỗ trợ của chúng tôi.",
  account_undefined: "Tài khoản này không tồn tại.",
  token_undefined: "Thông báo không tồn tại!",
  login_failed: "Sai tài khoản hoặc mật khẩu!",
  server_error: "Có lỗi ở phía server, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi để báo cáo lỗi này, xin cảm ơn.",
  avatar_type: "Kiểu file không hợp lệ, chỉ chấp nhận jpg & png.",
  avatar_size: "Ảnh upload tối đa cho phép là 1MB",
  user_current_password_failed: "Mật khẩu hiện tại không chính xác.",
  conversation_not_found: "Cuộc trò chuyện không tồn tại.",
  image_message_type: "Kiểu file không hợp lệ, chỉ chấp nhận jpg & png.",
  image_message_size: "Ảnh upload tối đa cho phép là 1MB",
  attachment_message_size: "Tệp tin đính kèm upload tối đa cho phép là 1MB",
};

export const transSuccess = {
  userCreated: (userEmail) => {
    return `Mã xác nhận đã được gửi tới <strong>${userEmail}</strong>`;
  },
  account_actived: "Kích hoạt tài khoản thành công, bạn đã có thể đăng nhập.",
  loginSuccess: (username) => {
    return null;
  },
  logout_success: "Bạn đã đăng xuất khỏi TEAM Chat!",
  user_info_updated: "Cập nhật thông tin người dùng thành công.",
  user_password_updated: "Cập nhật mật khẩu thành công."
};

export const transMail = {
  subject: "TEAM Chat: Xác nhận kích hoạt tài khoản.",
  template: (linkVerify) => {
    return `
      <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên Website TEAM chat.</h2>
      
      <h3>Vui lòng click vào liên kết bên dưới để xác nhận kích hoạt tài khoản.</h3>
      <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
      <h4>Xin chân thành cảm ơn</h4>
    `;
  },
  send_failed: "Có lỗi trong quá trình gửi email, vui lòng liên hệ lại với bộ phận hỗ trợ của chúng tôi."
};