


//  Playing data
const video_details_div = document.getElementById('videodetails');

const playVideo = () =>{
    let {videoId}=JSON.parse(localStorage.getItem("clicked_item"));
// console.log(data);
//  for video play
let iframe = document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
iframe.width="100%";
iframe.height="100%";
iframe.setAttribute("allowfullscreen", "true");
video_details_div.appendChild(iframe);

}
playVideo();

/* <iframe width="560" height="315" src="https://www.youtube.com/embed/FLB859QAObU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */