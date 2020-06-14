export function checkUrl(urls: string[], checkSuccess: (index:number, status:number)=>{} ) : void {
  for (let i = 0; i < urls.length; i++) {
    let videoUrl = urls[i];
    let videoDom = document.createElement('video');
    videoDom.src = videoUrl;
    videoDom.onloadeddata = ()=> {
      checkSuccess(i, 1);
    }
    videoDom.onerror = ()=> {
      checkSuccess(i, 0);
    }
  }
}