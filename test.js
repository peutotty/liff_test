import liff from '@line/liff';

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: "2006366291-3RdLglKb" })
    .then(() => {
        console.log("Success! you can do something with LIFF API here.");
        alert("success");
    })
    .catch((error) => {
        console.log(error);
        alert("error");
    })
});
