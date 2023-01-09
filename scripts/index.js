
/* 
  Navbar
*/
let menu = document.querySelector('.menu');

let sidebar=document.createElement("img");
sidebar.className="img";
sidebar.src="https://cdn.onlinewebfonts.com/svg/img_151810.png"

let logo = document.createElement("img");
logo.className="logo";
  logo.src ="https://www.scottbuckley.com.au/wp-content/uploads/transparent-background-youtube-logo-4.png"
menu.append(sidebar,logo);


// tabs
let tabs = document.querySelector('.tabs');

let create=document.createElement("img");
create.className="img"
let login_url= document.createElement("a");
login_url.href="auth.html"
let notify=document.createElement("img");
notify.className="img"
  notify.src ="https://www.pngarts.com/files/3/Youtube-Bell-Icon-PNG-High-Quality-Image.png"
let profile=document.createElement("img");
profile.className="img"
   profile.src ="https://tse1.mm.bing.net/th?id=OIP.u7qDIm9f79-YpNy7W3EkowHaHa&pid=Api&P=0"
   login_url.append(profile)
tabs.append(create,notify,login_url);

// 1. searchMovies
// function with ES6 features
const API_KEY =`AIzaSyDOmsWltN0tAipTLJ-CquewAv40JXt7iTg`

const searchVideo =async()=>{
    const query=document.querySelector("#query").value;
    if(query==""){
      return false;
    }
    const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}`
    try{
    
    const res=await fetch(url);
    let ytData= await res.json();
    let data=ytData.items;
    console.log(data);
    appendVideo(data);
    }catch(err){
        console.log(err);
    }
};

const container=document.getElementById("container");

const appendVideo=(data) => {
    container.innerHTML=null;
data.forEach(({snippet,id}) =>{


const title=snippet.title;
const videoId=id.videoId;
const thumbnail=snippet.thumbnails.high.url;
const channel=snippet.channelTitle;

const div=document.createElement("div");

const img=document.createElement("img");
img.src=thumbnail

const title_p=document.createElement("h4");
title_p.innerHTML=title;

const channel_html=document.createElement("h5");
channel_html.innerHTML=channel;

let obj={
  videoId,
  snippet,
}

div.onclick= () => {
  // console.log(obj)
  storeData(obj)
}

div.append(img,title_p,channel_html);

container.append(div);



    });
}

//  Set video to the local storage

let storeData=(data)=>{
localStorage.setItem('clicked_item',JSON.stringify(data));
window.location.href="video.html"
};

// Append default video
const appendDefVideo=(data) => {
  container.innerHTML=null;
data.forEach(({snippet,id}) =>{


const title=snippet.title;
const videoId=id.Id;
const thumbnail=snippet.thumbnails.high.url;
const channel=snippet.channelTitle;

const div=document.createElement("div");

const img=document.createElement("img");
img.src=thumbnail

const title_p=document.createElement("h4");
title_p.innerHTML=title;

const channel_html=document.createElement("h5");
channel_html.innerHTML=channel;

let obj={
videoId,
snippet,
}

div.onclick= () => {
// console.log(obj)
storeData(obj)
}

div.append(img,title_p,channel_html);

container.append(div);



  });
}

//  Set video to the local storage



const populor = async () => {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=in&key=${API_KEY}`
  try {
    let res = await fetch(url);
    let data =await res.json();
    console.log(data.items);
    appendDefVideo(data.items)

  }catch(error){
    console.log(error)
  }
}
populor();

const titlefilter = async () => {
  container.innerHTML=null;

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=in&order=title&key=${API_KEY}`
  try {
    let res = await fetch(url);
    let data =await res.json();
    console.log("hello :",data.items.snippet);

    data.items.forEach((ele,i) => {
      let div = document.createElement("div");
let img=document.createElement("img");
    img.src=ele.snippet.thumbnails.default.url; 
    console.log(ele.snippet.thumbnails)
    let title=document.createElement("p")
    title.innerHTML=ele.snippet.title
     
    div.append(img,title)
    let obj={
      videoId,
      snippet,
    }
    
    div.onclick= () => {
      // console.log(obj)
      storeData(obj)
    }
    
    container.append(div)
    })

  }catch(error){
    console.log(error)
  }
}


