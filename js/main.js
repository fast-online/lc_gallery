function openOverflow() {
    document.getElementsByTagName("body")[0].style['overflow-y'] = "hidden";
    document.getElementsByTagName("body")[0].style['background-color'] = "#3D3A36;";
}

function closeOverflow() {
    document.getElementsByTagName("body")[0].style['overflow-y'] = "visible";
    document.getElementsByTagName("body")[0].style['background-color'] = "#FFF4EA;";
}


import PhotoSwipeLightbox from '/lifestylecommunities/js/photoswipe-lightbox.esm.min.js';
import PhotoSwipe from '/lifestylecommunities/js/photoswipe.esm.min.js';

const leftArrowSVGString = '<svg class="prevnext" viewBox="0 0 46 67" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path class="st0" d="M38.4,5.1c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.6-0.2-0.9-0.2c-0.3,0-0.6,0.1-0.9,0.2c-0.3,0.1-0.5,0.3-0.8,0.5l-26.3,27C8.3,32.6,8,33.3,8,33.9s0.3,1.3,0.7,1.8l26.3,27c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.2,0.9,0.2c0.3,0,0.6-0.1,0.9-0.2c0.3-0.1,0.5-0.3,0.8-0.5c0.4-0.5,0.7-1.1,0.7-1.7c0-0.6-0.2-1.2-0.7-1.7L13.6,33.9L38.4,8.5c0.4-0.5,0.7-1.1,0.7-1.7C39.1,6.2,38.9,5.6,38.4,5.1L38.4,5.1z"/></svg>';
const rightArrowSVGString = '<svg class="prevnext" viewBox="0 0 45 67" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path class="st0" d="M8.7,5.1C8.3,5.6,8,6.2,8,6.8S8.2,8,8.7,8.5l24.8,25.4L8.7,59.3C8.3,59.8,8,60.4,8,61s0.2,1.2,0.7,1.7c0.2,0.2,0.5,0.4,0.8,0.5s0.6,0.2,0.9,0.2c0.3,0,0.6-0.1,0.9-0.2c0.3-0.1,0.5-0.3,0.8-0.5l26.3-27c0.5-0.5,0.7-1.1,0.7-1.8s-0.3-1.3-0.7-1.8L12,5.1c-0.2-0.2-0.5-0.4-0.8-0.5s-0.6-0.2-0.9-0.2c-0.3,0-0.6,0.1-0.9,0.2S8.9,4.9,8.7,5.1L8.7,5.1z"/></svg>';
const closeSVGString = '<svg width="35" height="35" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 42L2 2" stroke="white" stroke-width="5"/><path d="M42 2L2 42" stroke="white" stroke-width="5"/></svg>';
const zoomSVGString = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.8828 17.3047H20.2734V12.0703C20.2734 11.8984 20.1328 11.7578 19.9609 11.7578H17.6172C17.4453 11.7578 17.3047 11.8984 17.3047 12.0703V17.3047H12.6953C12.5234 17.3047 12.3828 17.4453 12.3828 17.6172V19.9609C12.3828 20.1328 12.5234 20.2734 12.6953 20.2734H17.3047V25.5078C17.3047 25.6797 17.4453 25.8203 17.6172 25.8203H19.9609C20.1328 25.8203 20.2734 25.6797 20.2734 25.5078V20.2734H24.8828C25.0547 20.2734 25.1953 20.1328 25.1953 19.9609V17.6172C25.1953 17.4453 25.0547 17.3047 24.8828 17.3047ZM35.9766 33.8672L30.2734 28.1641C35.043 22.3477 34.7109 13.7305 29.2578 8.28125C23.4766 2.49609 14.0859 2.49609 8.28125 8.28125C2.49609 14.0859 2.49609 23.4766 8.28125 29.2578C13.7305 34.7109 22.3477 35.043 28.1641 30.2734L33.8672 35.9766C33.9922 36.0859 34.1914 36.0859 34.2969 35.9766L35.9766 34.2969C36.0859 34.1914 36.0859 33.9922 35.9766 33.8672ZM27.1875 27.1875C22.5469 31.8242 15.0313 31.8242 10.3906 27.1875C5.75391 22.5469 5.75391 15.0313 10.3906 10.3906C15.0313 5.75391 22.5469 5.75391 27.1875 10.3906C31.8242 15.0313 31.8242 22.5469 27.1875 27.1875Z" fill="white"/></svg>';


const lightboxColour = new PhotoSwipeLightbox({
arrowPrevSVG: leftArrowSVGString,
arrowNextSVG: rightArrowSVGString,
closeSVG: closeSVGString,
zoomSVG: zoomSVGString,
gallery: '#gallery-colour',
children: 'a',
imageClickAction: false,
tapAction: false,
pswpModule: PhotoSwipe,
bgOpacity: 0.95,
padding: { top: 60, bottom: 60 }
});

const lightboxFacade = new PhotoSwipeLightbox({
arrowPrevSVG: leftArrowSVGString,
arrowNextSVG: rightArrowSVGString,
closeSVG: closeSVGString,
zoomSVG: zoomSVGString,
gallery: '#gallery-facade',
children: 'a',
imageClickAction: false,
tapAction: false,
pswpModule: PhotoSwipe,
bgOpacity: 0.95,
padding: { top: 60, bottom: 60 }
});

lightboxColour.on('uiRegister', function() {
lightboxColour.pswp.ui.registerElement({

    onInit: (el, pswp) => {

        lightboxColour.pswp.on('change', () => {
        const currSlideElement = lightboxColour.pswp.currSlide.data.element;
        let captionHTML = '';
        let captionHTMLInfo = '';
        let blockInfo = lightboxColour.pswp.currSlide.container.querySelector('.pswp__custom-caption-two');
        if (currSlideElement) {
            if (blockInfo){
                blockInfo.remove();
            }
        const hiddenCaption = document.getElementById('projectName');
        const hiddenCaptionInfo = lightboxColour.pswp.currSlide.data.element.lastElementChild;
        captionHTML = hiddenCaption.innerHTML;
        captionHTMLInfo = hiddenCaptionInfo.innerHTML;
        lightboxColour.pswp.currSlide.container.insertAdjacentHTML('beforeend', '<div style="width:'+lightboxColour.pswp.currSlide.prevDisplayedWidth+'px; height:'+lightboxColour.pswp.currSlide.prevDisplayedHeight+'px" class="pswp__custom-caption-two pswp__hide-on-close">'+'<div class="caption_content"><span class="info"><span>Type:</span><span> '+captionHTML+'</span></span>'+captionHTMLInfo+'</div></div>');
        } 
    });

    },

    
});
});



lightboxFacade.on('uiRegister', function() {
lightboxFacade.pswp.ui.registerElement({

    onInit: (el, pswp) => {

        lightboxFacade.pswp.on('change', () => {
        const currSlideElement = lightboxFacade.pswp.currSlide.data.element;
        let captionHTML = '';
        let captionHTMLInfo = '';
        let blockInfo = lightboxFacade.pswp.currSlide.container.querySelector('.pswp__custom-caption-two');
        if (currSlideElement) {
            if (blockInfo){
                blockInfo.remove();
            }
        const hiddenCaption = document.getElementById('projectName');
        const hiddenCaptionInfo = lightboxFacade.pswp.currSlide.data.element.lastElementChild;
        captionHTML = hiddenCaption.innerHTML;
        captionHTMLInfo = hiddenCaptionInfo.innerHTML;
        lightboxColour.pswp.currSlide.container.insertAdjacentHTML('beforeend', '<div style="width:'+lightboxColour.pswp.currSlide.prevDisplayedWidth+'px; height:'+lightboxColour.pswp.currSlide.prevDisplayedHeight+'px" class="pswp__custom-caption-two pswp__hide-on-close">'+'<div class="caption_content"><span class="info"><span>Type:</span><span> '+captionHTML+'</span></span>'+captionHTMLInfo+'</div></div>');
        } 
    });

    },

    
});
});


lightboxColour.on('afterInit', (el, pswp) => {
openOverflow();

});

lightboxFacade.on('afterInit', (el, pswp) => {
openOverflow();
});

lightboxColour.on('imageSizeChange', ({ content, width, height, slide }) => {
if(lightboxColour.pswp.currSlide.container.children.length > 1){
    lightboxColour.pswp.currSlide.container.querySelector('.pswp__custom-caption-two').style.width = width+"px";
    lightboxColour.pswp.currSlide.container.querySelector('.pswp__custom-caption-two').style.height = height+"px";
}
});

lightboxFacade.on('imageSizeChange', ({ content, width, height, slide }) => {
if(lightboxFacade.pswp.currSlide.container.children.length > 1){
    lightboxFacade.pswp.currSlide.container.querySelector('.pswp__custom-caption-two').style.width = width+"px";
    lightboxFacade.pswp.currSlide.container.querySelector('.pswp__custom-caption-two').style.height = height+"px";
}
});

lightboxColour.on('close', () => {
closeOverflow();
});

lightboxFacade.on('close', () => {
closeOverflow();
});

lightboxColour.init();
lightboxFacade.init();

