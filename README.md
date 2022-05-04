# [我的 GitHub 個人網站 for easyliugit](https://easyliugit.github.io)

## 方法1.[使用 GitHub 免費製作個人網站 - 為你自己學 Git | 高見龍](https://gitbook.tw/chapters/github/using-github-pages)

GitHub 除了提供免費的 Git Server 外，如果推上去的分支的名字剛好叫做 gh-pages，你可以用 GitHub 當做靜態檔案的伺服器，它比一般外面虛擬主機要便宜得多，也安全得多。不過也有一些限制：

1. 僅呈現靜態頁面內容，如果是什麼 PHP 或是 ASP 的它不會理你。
2. 不支援 .htaccess 之類的設定檔，所以無法設定使用者密碼。
3. 僅能使用 Git 上傳，沒有什麼 FTP 之類的東西。
4. 不像 Repository 有 Private 的設定，所有的 GitHub Pages 都是公開的，甚至放在 Private 專案裡，頁面也是公開的。

整體上來說，GitHub Pages 的優點還是多於缺點，至少它穩定、安全又沒收你錢。接著就試試看如何把頁面放上去吧。

## 方法2.[善用gh-pages分支功能　無料架設靜態網站 | 網管人](https://www.netadmin.com.tw/netadmin/zh-tw/technology/89C148A5BC09490785753668A11280B8)

git 是利用檔案庫的觀念來管理檔案的歷史記錄，並追蹤檔案內容的狀態和版本等資訊，而 GitHub 網站是利用 git 來管理世界各地程式設計師所提供的程式原始碼。本文將利用GitHub所提供的 gh-pages 分支功能來架設一個提供靜態網頁功能的網站。

1. 僅能呈現靜態頁面的內容（即HTML網頁），並無法提供動態網頁，例如利用PHP、JSP等等網頁程式所撰寫的檔案。
2. 不能支援如.htaccess之類的密碼驗證功能，亦即不能針對gh-pages的頁面設定密碼保護。
3. 所有的gh-pages內的頁面都是公開的，表示所有的人都可存取到相關的頁面。
4. gh-pages上的檔案庫大小限制為1GB。
5. 每個月的頻寬限制為100GB。
6. 每小時最多能提交10個版本的檔案。

在GitHub新建一個檔案庫（以本例而言，檔案庫的名稱為pagedemo），在建立過程中，建議勾選「initialize this repository with a README」選項，此選項會自動建立README的檔案。

成功建立檔案庫之後，可利用如「https://github.com/[使用者名稱]/pagedemo 」網址來查看檔案庫的內容，在此階段中，通常只會有一個名為「README.md」的檔案。

接著，在本地端的工作機上（以下簡稱本地端）執行下列指令，將網頁檔案提交到新建的檔案庫。

首先，以「git clone https://github.com/[使用者名稱]/pagedemo.git 」來取得 GitHub 檔案庫內的檔案。成功執行後，在本地端會產生一個名稱為「pagedemo」的目錄（存放該檔案庫的所有檔案），此即為工作目錄，可以在此目錄中編輯相關的網頁檔案。

接著，在此工作目錄內執行「git branch gh-pages」指令，新建一個名稱為「gh-pages」的分支。在建立分支成功後，以「git checkout gh-pages」指令切換到 gh-pages 分支上。在切換過後，即可在工作目錄內簡單地新增一個網頁檔（以index.html為檔名）。

接著，執行「git add .」指令將此檔案儲存到暫存區，並利用「git commit -m "test page"」指令（其中-m參數為本次提交的說明文字）提交到本地端的檔案庫上。

最後，使用「git push origin gh-pages」指令將本地端檔案庫內的檔案上傳至 GitHub 網站上。

整個過程完成之後，連結「https://[使用者帳號].github.io/pagedemo/ 」網址，即可看到所製作的網頁內容。
