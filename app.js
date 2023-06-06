const users = [
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg&quot;"
    },
    {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg&quot;"
    },
    {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg&quot;"
    },
    {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg&quot;"
    },
    {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg&quot;"
    },
    {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg&quot;"
    }
    ];
let usersEmail = document.getElementById("email")
let usersName = document.getElementById("firs_name")
let lastName = document.getElementById("last_name")

const user = users.find(user => user.id === 7);


usersEmail.textContent = "email :  " + user.email;
first_name.textContent = "name :  " + user.first_name;
lastName.textContent = "last_name  :  " + user.last_name;




// box styles //
let boxStyle = document.getElementById("user-list")
boxStyle.style.display = "flex";

var elem = document.getElementById("img");
elem.setAttribute("src", "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg");

function removeSambox (){
    boxStyle.remove()
}
const secondUser = users.find(user => user.id === 8);
let secondUserGmal = document.getElementById("0bb8")
let secondUserName = document.getElementById("92o9d")
let secondUserUserName = document.getElementById("a2eewa")

secondUserGmal.textContent = "email :  " + secondUser.email;
secondUserName.textContent = "name :  " + secondUser.first_name;
secondUserUserName.textContent = "last_name  :  " + secondUser.last_name;
var elem = document.getElementById("image");
elem.setAttribute("src", "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg");
let secondBox = document.getElementById("second-user-list")
function removeSecondSambox (){
    secondBox.remove()
}