const userName =document.querySelector("#UserName")
const subBtn = document.querySelector('.subt')
const reset = document.querySelector('button')
const pic = document.querySelector('#pic')
const gitName = document.querySelector('#name')
const followers = document.querySelector('#followers')
const profile = document.querySelector('.profile')
let nameValue;
function getValue(){
    return userName.value
}

makeUrl = () => {
    return `https://api.github.com/users/${getValue()}` 
}

subBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    const profileUrl = makeUrl()
    getDetails(profileUrl)
})



getDetails = (url)=>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET' , url)
    xhr.onreadystatechange = ()=>{
        console.log(xhr.readyState)
        if(xhr.readyState === 4){
            console.log(url);
            console.log(xhr.responseText);
            profile.style.display = 'flex'
            const data = JSON.parse(xhr.responseText)
            pic.src = data.avatar_url;
            gitName.innerHTML = `Name:${data.name}`  
            followers.innerHTML = `Followers:${data.followers}`  
            console.log(typeof data);
            console.log(data.followers);
        }    
    }
    xhr.send()
    
}



reset.addEventListener('click' , ()=>{
    userName.value = ""
    profile.style.display = 'none'

})