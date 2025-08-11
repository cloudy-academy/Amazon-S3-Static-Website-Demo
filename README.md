# Amazon S3 Static Website Demo

This project is a simple static website used in the **Amazon S3** tutorial video.  
In this tutorial, you will learn how to create an S3 bucket, upload files to it, share some of those files with others, and finally host a static website using Amazon S3.

---

## 📂 Project Structure

```plaintext
.
├── images/           # Images folder
│   └── AmazonS3.png  # Amazon S3 image used in the website
│   └── error.png     # Error image used in the website
├── favicon.ico       # Website favicon
├── index.html        # Main HTML file
├── error.html        # Error HTML file
├── script.js         # JavaScript file
└── style.css         # CSS file
```

---

## ⚡ Features

- Simple design using HTML, CSS, and JavaScript
- No installation or dependencies required
- Easily hostable on Amazon S3

---

## 🚀 Usage

1. Clone or download the project:
   ```bash
   git clone https://github.com/USERNAME/REPO-NAME.git
   ```
2. Upload the files to your S3 bucket.
3. Disable Block Public Access in your S3 bucket.
4. Define this policy for your S3 bucket:
   ```json
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": [
               "YOUR_BUCKET_ARN/index.html",
               "YOUR_BUCKET_ARN/error.html",
               "YOUR_BUCKET_ARN/script.js",
               "YOUR_BUCKET_ARN/style.css",
               "YOUR_BUCKET_ARN/images/*"
            ]
         }
      ]
   }
   ```
5. Enable Amazon S3 static website hosting.
6. Get your website link and share it.

---

## 🎥 Tutorial Video

🔗 [YouTube](https://youtu.be/xMxqsT_0ty0)

---

## 📄 License

This project is released under the **MIT** license.  
See the [LICENSE](LICENSE) file for details.
