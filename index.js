var users =[
    {
        "name": "john",
        "gender":"male",
        "image":"john.png",
    },
    {
        "name":"jane",
        "gender":"female",
        "image":"jane.png",
    }
]
var index=0;
function toggle(){
    if(index==0)
        index=1;
    else
        index=0;
    document.getElementById("user-name").innerText=users[index].name;
    document.getElementById("user-gender").innerText=users[index].gender;
    document.getElementById("user-image").src=users[index].image;
}
function randomUser(){
    fetch("https://randomuser.me/api")
    .then(function(rawData){
         return rawData.json();
    })
    .then(function(jsonData){
        var user=jsonData.results[0];
        var gender=user.gender;
        var fullName=user.name.title +" "+user.name.first+" "+user.name.last;
        var picture=user.picture.large;
        document.getElementById("user-name").innerText=fullName;
        document.getElementById("user-gender").innerText=gender;
        document.getElementById("user-image").src=picture;

    })

}