# todoapp-nodejs
## 目的
todoappの作成を通してNode.jsの学習をすすめる

## 必要機能
- アカウント作成
- ログイン
- タスク
  - 登録
  - 完了
  - 削除

## 使用技術
- Node.js
  - Express
- MongoDB
- Figma

## デザイン
- [Figma](https://www.figma.com/file/z9Pf2ePWlsGXtZI7XR97Gz/todoapp-%E7%94%BB%E9%9D%A2%E8%A8%AD%E8%A8%88?node-id=0%3A1&t=hFTlsjJWklAlBdTs-0)
- [todoapp-画面設計.pdf](https://github.com/NotoSgnikusnsi/todoapp-nodejs/files/10776985/todoapp-.pdf)
- スクショ
![screen](https://user-images.githubusercontent.com/70315255/219951808-3d23432d-8796-4adc-ac43-892e0bfeb9fd.png)

## 構成
e.g. HTTPメゾット エンドポイント
routers/accounts.js
- GET /todo
- GET /todo/account/login
- POST /todo/account/login
- GET /todo/account/signup
- POST /todo/account/signup
routers/todos.js
- GET /todo/task/
- PUT /todo/task/{task_id}
- DELETE /todo/task/{task_id}
- PUT /todo/task/{task_id}/done
- DELETE /todo/task/{task_id}/done
- GET /todo/task/add
- POST /todo/task/add

## 参考
- https://youtu.be/JBCykXLfvv0
- https://weseek.co.jp/tech/913/
- https://youtube.com/playlist?list=PLgx8xyH2m7OUtmSNw_RLOUDiBnZjhz0d8
