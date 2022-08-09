const myForm = document.querySelector("#addTask");
function readFromStorage() {
     let data
     try {
          data = JSON.parse(localStorage.getItem("userInfo")) || []
          if (!Array.isArray(data)) throw new Error("invalid")
     }
     catch (e) {
          data = []
     }
     console.log(data);
     return data;

}


myForm.addEventListener("submit", function (e) {
     e.preventDefault();

     const userName = document.querySelector('[name = "name"]').value;
     const userBalance = document.querySelector('[name = "balance"]').value;
     const userData = [userName, userBalance]
     console.log(userData)
     const user = [
          { key: "accNum", value: Date.now() },
          { key: "name", value: userName },
          { key: "balanc", value: userBalance },
          { key: "transaction", default: [] },

     ]
     const jsonString = JSON.stringify(user)
     const setJson = localStorage.setItem("userInfo", jsonString);
     const getJson = localStorage.getItem("userInfo")
     console.log(getJson);
     // console.log(setJson);
     myForm.reset()
})
