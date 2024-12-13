# README - Ứng dụng SignLanguage

## Giới thiệu

Đây là repo GitHub cho bài tập lớn môn **Tương tác người máy**.

**Mã môn học**: [INT2041 55]  
**Nhóm**: 9  
**Chủ đề**: Xây dựng ứng dụng SignLanguage - Dịch và học ngôn ngữ ký hiệu

### Thành viên
- **Lê Thị Minh Tâm** - MSV: 22028322
- **Hoàng Linh Chi** - MSV: 22028132
- **Lương Thị Linh** - MSV: 22028202
- **Nguyễn Thị Thu Trang** - MSV: 22028254

## Mục tiêu
- Cung cấp giải pháp hỗ trợ giao tiếp cho người khiếm thính và người câm điếc.
- Xây dựng một hệ thống dịch ngôn ngữ ký hiệu và ngôn ngữ tự nhiên (văn bản, giọng nói).
- Tạo nền tảng học ngôn ngữ ký hiệu thông qua từ điển, game và các bài học tương tác.

## Hướng dẫn cài đặt và sử dụng

Để bắt đầu với dự án, bạn có thể làm theo các bước sau:

1. Clone repository này về máy tính của bạn:
    ```bash
    git clone https://github.com/mtlee26/Sign-language-translator.git
    ```
2. Cài đặt các thư viện cần thiết:
    ```bash
   cd client
   npm install
   cd server
   npm install
    ```

3. Chạy ứng dụng:
    ```bash
    npm start
    ```

## Các tính năng chính

1. **Dịch ngôn ngữ ký hiệu qua ngôn ngữ tự nhiên**: Hỗ trợ nhận diện cử chỉ tay qua camera và chuyển đổi thành văn bản.
2. **Dịch ngôn ngữ tự nhiên qua ngôn ngữ ký hiệu**: Chuyển văn bản hoặc giọng nói thành ký hiệu dưới dạng hình ảnh động.
3. **Từ điển ngôn ngữ ký hiệu**: Tra cứu các từ và cụm từ trong ngôn ngữ ký hiệu, có video minh họa.
4. **Game luyện tập**: Người dùng có thể tham gia các quiz game để củng cố kỹ năng ngôn ngữ ký hiệu.

## Công nghệ sử dụng

- **React**: Thư viện JavaScript dùng để xây dựng giao diện người dùng.
- **Tailwind CSS**: Framework CSS hỗ trợ tạo giao diện nhanh chóng và đồng bộ.
- **MongoDB**: Hệ quản trị cơ sở dữ liệu NoSQL dùng để lưu trữ dữ liệu người dùng.
- **TensorFlow**: Framework học sâu dùng để huấn luyện mô hình nhận diện cử chỉ tay.
- **MediaPipe**: Công cụ hỗ trợ nhận diện cử chỉ tay trong thời gian thực.
- **OpenCV**: Thư viện xử lý hình ảnh, video, hỗ trợ nhận diện và phân tích cử chỉ tay.
