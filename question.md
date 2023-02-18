## 什麼是 React.js?

React.js 是由 Facebook 開發的 JavaScript 庫，用於構建可重複使用的、快速響應式的用戶界面。

## 什麼是元件? 為什麼元件的概念對 React 來說很重要?

在 React 中，元件是構成用戶界面的基本單位，是可以重複使用的獨立模塊。每個元件都可以有自己的狀態，並且可以獨立地呈現為界面的一部分。元件可以包含其他元件，形成層次結構，還可以使代碼更加模組化，讓開發人員更容易地理解和修改代碼。此外，元件的重用性使得開發人員可以更快速地構建程式，提高代碼的效率和可靠性

## Props 和 State 差別在哪?

props 用於將數據從一個元件傳遞到另一個元件。props 由父元件傳遞給子元件，並且子元件不能直接更改 props 的值。如果需要更改 props 的值，必須通過父元件修改。

state 是用於管理元件內部的數據，元件可以使用 setState 方法來更新自己的狀態。當 state 更新時，React 會自動重新渲染元件。

## 選擇⼀個曾經在專案中⽤過的元件週期，並介紹你是怎麼使⽤的?

    const Todo = props => {
    // 設置 state
    const [title, setTitle] = useState('default')

        // 更新 state
        const changeTitle = e => setTitle(e.target.value)

        // 設置 lifecycle
        useEffect(()=>{

            // componentDidMount 及 componentDidUpdate
            console.log(`更新後的 State ${title}`)

            // componentDidUpdate 及 componentWillUnmount
            return(()=>{
                console.log(`更新前的 State ${title}`)
            })
        })

        return (
            <input value={title} onChange={changeTitle} />
        )

    }

## Class 跟 Functional 元件的差別? 該怎麼選擇?

Class 和 Functional 元件是 React 中兩種不同的元件類型。

Class 元件是使用 ES6 的 class 語法定義的 React 元件，它們有自己的內部狀態（state）和生命週期方法（lifecycle methods）。Class 元件通常用於較複雜的場景，例如需要管理較多狀態和進行較多邏輯處理的場景。Class 元件通常通過繼承 React.Component 類來定義。

Functional 元件是一種純函數（pure function），接收一個 props 對象作為輸入，返回一個 React 元素作為輸出。Functional 元件沒有自己的內部狀態和生命週期方法，通常用於簡單的展示性元件或只有少量邏輯處理的元件。Functional 元件可以通過 ES6 的箭頭函數或普通函數來定義。

選擇 Class 還是 Functional 元件通常取決於元件所處的場景和需求。如果元件較簡單且只需要展示性質的渲染，或者只需要少量的邏輯處理，那麼可以使用 Functional 元件。如果元件需要管理較多的狀態，或需要使用生命週期方法來處理複雜的邏輯，那麼應該使用 Class 元件。此外，在 React 16.8 版本之後，Functional 元件還可以使用 Hooks 來管理狀態和進行一些邏輯處理，這也是一個選擇 Functional 元件的好理由。

個人使用上基本上都使用 functional component 比較簡潔也是整個框架的趨勢。

## 什麼是 React 中的 Events?

在 React 中，事件（Events）是指由使用者執行的操作，例如按鈕點擊、鼠標移動、表單提交等等。React 中的事件處理非常類似於原生的 JavaScript 事件處理，但有些細節上有所不同。

React 中的事件處理是基於合成事件系統（Synthetic Event System）實現的。這意味著 React 提供了一個跨瀏覽器的事件處理系統，以確保事件處理在不同瀏覽器中的行為一致。

## 什麼是 JSX?

JSX 是一種 JavaScript 的語法擴展，用於在 React 中定義元素。它允許在 JavaScript 中使用類似 HTML 的語法，同時也可以使用 JavaScript 表達式，例如變量、函數、運算符等，並且提供了一種簡潔明瞭的方式來描述 UI 元素的結構。

## 什麼是 Virtual DOMs? ⼜是怎麼運作的?

Virtual DOM 是 React 中的一個核心概念。它是一個輕量的 object，它模擬真實 DOM（Document Object Model）的層次結構，包含了元素、屬性和文本等信息。
使用 Virtual DOM 的好處是可以在 Virtual DOM 上進行計算和比較，不必每次狀態變化時直接操作真實 DOM，這樣可以減少 DOM 操作的次數，提高 React 應用程序的性能。此外，使用 Virtual DOM 還可以使得 React 應用程序更容易編寫和維護，因為它抽象了真實 DOM 的細節，使得 React 代碼更具有可讀性和可維護性。

當 React 應用程序的狀態發生變化時，React 會使用 Virtual DOM 來計算出需要更新的部分，然後將這些變化應用到真實 DOM 中，從而實現 React 應用程序的高效更新。

Virtual DOM 的運作過程如下：

1. 當 React 元件的狀態發生變化時，React 會使用 Virtual DOM 來創建一個新的 Virtual DOM。

2. React 會將新的 Virtual DOM 樹與上一次渲染時的 Virtual DOM 進行比較，找出需要更新的部分。

3. React 會根據需要更新的部分創建一個差異（diff）對象，描述了需要更新的部分的具體變化。

4. React 將差異對象應用到真實 DOM 中，從而更新。

## 你會怎麼 Debug ⽤ React 寫出來的網⾴應⽤? ⽤哪些⼯具?

我會使用 react 開發者工具跟瀏覽器的 console 去看出發的 function 是否正常，state 是否有異。

## ⽤ React 的優點是什麼?

1. 模組化，好維護可重複利用
2. 社群龐大，有很多好的第三方元件庫支援
3. 單向數據流: React 採用單向數據流的模型，即數據流只能從父組件流向子組件，這樣可以減少代碼出錯的機會，並且可以更加容易地掌握應用程序的數據流向。

## React 有什麼缺點和限制?

1. spa 程式的形式導致 seo 結果較差
2. 學習 react 雖然不難但由於第三方程式庫眾多，導致學習成本有時會很高

## 什麼是 Redux 或 context api?

Redux 和 Context API 都是 React 的狀態管理庫，用於管理應用程序的狀態。它們的主要目的都是將狀態從 React 組件中抽離出來，使得應用程序的狀態變得更加可控和可測試。

Redux 是一個功能強大的狀態管理庫，它提供了一個可預測的狀態容器，用於管理整個應用程序的狀態。Redux 中的狀態是不可變的，只能通過發起一個 action 來修改狀態。每個 action 都是一個純函數，用於描述將要對狀態進行的修改。Redux 使用中央存儲來管理狀態，這樣就可以方便地在應用程序的各個部分之間共享狀態。

Context API 是 React 提供的另一種狀態管理方式，它允許您在 React 應用程序中共享狀態。Context API 通過一個上下文對象來傳遞狀態，這樣就可以在整個應用程序中共享這個上下文對象，並且讓所有的子組件都可以訪問到這個狀態。Context API 與 Redux 相比，它更加輕量級和簡單，適用於較小規模的應用程序。

## 使⽤ Redux 的優點是什麼?

1. 單一數據源
2. 可預測性
3. 更好的可維護性
4. 擴展性

## 為什麼你會想選擇 React?

我覺得方便編寫也易於理解，效能也不錯，另外社群廣大可以找到很多學習的資源，常見的功能都有好用的元件庫。 react 的現在前端框架的主流，興新框架也多借鑑 react，所以我覺得使用 react 是對與產出效率跟個人學習發展都有幫助的選擇

## 什麼是 react-hook-form?

React Hook Form 是一個 React 庫，它提供了一種簡單、可靠的方式來處理表單的狀態管理和驗證。
