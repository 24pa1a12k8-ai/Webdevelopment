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