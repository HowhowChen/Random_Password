# Random_Password
  該專案用於隨機生成密碼或修改密碼，給不知道改什麼密碼的使用者一些參考的選擇。
  
## 功能列表

*  提供兩種生成密碼的服務
   *  生成隨機亂數
   *  由原密碼為基底增添隨機亂數 e.g.  abc => !a2bc
  
* 密碼呈現方式
  * 單一組密碼產出會render在網頁上
  * 多組密碼產出會download一份excel清單在本機
  
* 介面欄位說明
  * add Password Length: 新增密碼長度有兩種情況
    * Origin Password 有填，會從原始密碼往上增加亂數e.g. add Password Length=2, Origin Password=abc, result=!a2bc
    * Origin Password 未填， 會生成add Password Length填入數字數量的隨機數， e.g. add Password Length=2, result=@d
  * Include Lowercase Characters、Include Uppercase Characters、Include Numbers、Include Symbols 可勾可不勾，但至少有一勾選!
  * Exclude Characters: 移除字元，產出亂數必不包含該欄位填入之字元 
  * Password times and generate excel: 產出n個密碼，並呈現在excel上
    
  
* 生成密碼前皆會與本機/遠端資料庫比對，若無重複才會產出 

## 畫面預覽

###  產出一組密碼
![產出一組密碼](https://user-images.githubusercontent.com/106914854/186695347-94b5f50f-28fb-42da-b654-fdeb85a36965.PNG)


###  產出一組密碼，由原密碼往上添增亂數 
![產出單一組密碼由，原密碼往上添增亂數 ](https://user-images.githubusercontent.com/106914854/186697874-5ed4496b-3f31-42c8-99b1-49697f104273.PNG)


### 產出多組密碼
![產出多組密碼](https://user-images.githubusercontent.com/106914854/186695988-75a2c66b-d215-4079-b6af-0bf9e81b24a2.PNG)

![產出多組密碼結果](https://user-images.githubusercontent.com/106914854/186696393-3d64cdf0-b030-4228-958e-d22e4ec097e1.PNG)


### 產出多組密碼，由原密碼往上添增亂數 

![產出多組密碼，由原密碼往上添增亂數](https://user-images.githubusercontent.com/106914854/186697093-8cf9eb6d-72bd-4618-b277-74741d43c0c8.PNG)
![產出多組密碼，由原密碼往上添增亂數結果](https://user-images.githubusercontent.com/106914854/186697108-84c8916a-3447-46a8-91e8-9e34378fef0e.PNG)


## 安裝
1. Clone 此專案至本機電腦，打開 terminal 至欲存放專案之資料夾，輸入下列指令
```
git clone https://github.com/HowhowChen/Random_Password.git
```

2. 進入專案資料夾，請在終端機輸入：
```
cd Random_Password
```

3. 安裝 npm 套件，請在終端機輸入：
```
npm install
```

4. 修改app.js 資料庫位址
(**本專案使用本地MongoDB，若已下載並啟動DB服務，無須變更程式碼**)

![資料庫位址](https://user-images.githubusercontent.com/106914854/186699430-9e2eff24-0660-4063-812e-9be17a92f155.PNG)


5. 執行專案，請在終端機輸入：
```
npm run dev
```

6. 輸入下列代碼於**網址列**即可使用
```
localhost:3000
```

## 相關技術
* node.js
* express
* express-handlebars
* excel-export
* moment
* mongoose
* MongoDB
* bootstrap



## 開發者
Howhow Chen

