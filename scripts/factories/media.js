
// eslint-disable-next-line no-unused-vars
function mediaFactory(data){

    // eslint-disable-next-line no-unused-vars
    const { photographerId, title, image,video, likes, date} =data;

     // eslint-disable-next-line no-unused-vars
     const videoMedia = `assets/images/${video}`;
      const picture = `assets/SamplePhotos/${photographerId}"/"${image}`;
      const picture2 = picture.replace(/[&#,+()$~%'":*?<>-]/g,'');
     const picture3 = `assets/SamplePhotos/${photographerId}"/"${video}`;
     const picture4 = picture3.replace(/[&#,+()$~%'":*?<>-]/g,'');
      

 function getUserMedia() {
           
        
let media = undefined;
        
      if( image != undefined ) {
        
            media = document.createElement( 'img' );
            media.src = picture2;
            media.alt = title;
            media.setAttribute("loading", "lazy");
                  
            
        } else if( video != undefined ) {
            media = document.createElement( 'video' );
            media.src = picture4;
            media.title = title;
            media.setAttribute("preload", "metadata");
        }
         media.setAttribute("onclick", "lightbox(event)");
        media.setAttribute("onkeydown", "handleKeyDown(event)?lightbox(event):undefined");
        media.setAttribute("aria-haspopup", "dialog");
        media.setAttribute("aria-label", title);
        media.setAttribute("tabindex", 0);
        media.dataset.date = date;
        media.className = 'thumb-img';

                 return (media)


     }
          
          function getUserWorkDOM() {
        const figure = document.createElement( 'figure' );
        figure.className = 'thumb-imgfull';
        
        var media = getUserMedia();

        const figcaption = document.createElement( 'figcaption' );

        const text = document.createElement( 'h2' );
        text.textContent = title;

        const divLikes = document.createElement( 'div' );
        divLikes.setAttribute("onclick", 'like(event)');
        divLikes.setAttribute("role", "button");
        divLikes.className = 'likes';
        divLikes.ariaLabel = 'likes';

        const numberLikes = document.createElement( 'span' );
        numberLikes.className = 'number-likes';
        numberLikes.textContent = likes;
        
        const imgLikes = document.createElement( 'img' );
        imgLikes.src = 'assets/icons/heart.svg';
        imgLikes.alt = 'likes';

        divLikes.appendChild(numberLikes);
        divLikes.appendChild(imgLikes);

        figcaption.appendChild(text);
        figcaption.appendChild(divLikes);

        figure.appendChild(media);
        figure.appendChild(figcaption);

        return figure;
    }

    return { getUserWorkDOM }
       
}









    
