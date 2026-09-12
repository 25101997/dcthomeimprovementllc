function expand_img(id){
      let carousel_product = document.getElementById(id);
      carousel_product.classList.add('full-img');
      let height = carousel_product.clientHeight;
      
      let imgs = carousel_product.getElementsByClassName('img-service-container');
      for(let i=0; i<imgs.length;i++){
          img_height = 'height:'+height+'px;';
          imgs[i].setAttribute('style', img_height);
      }
  
      window.addEventListener('resize',(e)=>{
          height = carousel_product.clientHeight;
          for(let i=0; i<imgs.length;i++){
              img_height = 'height:'+height+'px;';
              imgs[i].setAttribute('style', img_height);
          }
      })
  
      let close_full_img = carousel_product.getElementsByClassName('close-full-img');
      close_full_img[0].setAttribute('style', 'display:flex;');
      close_full_img[0].addEventListener('click',()=>{
          for(let i=0; i<imgs.length;i++){
              img_height = 'height: 268px;';
              imgs[i].setAttribute('style', img_height);
          }
          carousel_product.classList.remove('full-img');
          close_full_img[0].setAttribute('style', 'display:none;');
      })
}


document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementsByClassName('btn-get-quote');
    let container = document.getElementById('form-get-quote');
  
    if (btn.length > 0) {
      for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
          let display = container.style.display;
          if (display !== 'flex') {
            container.style.display = 'flex';
            let id = this.dataset.id;
            let title = this.dataset.title;
            let input_title = document.getElementById('wpforms-39-field_8');
            if (input_title) {
              input_title.value = title;
            }
          } else {
            container.style.display = 'none';
          }
        });
      }
    }
  
    let btn_close_form = document.getElementById("close-form");
    let form = document.getElementById("wpforms-form-39");
  
    if (btn_close_form) {
      btn_close_form.addEventListener('click', function () {
        if (form && form.isConnected === false) {
          location.reload();
        } else if (container) {
          container.style.display = 'none';
        }
      });
    }
});