let width=window.innerWidth;
let ls_header_image='img/computer.jpg';
let ls_image_height=512;
//Pop up para moviles
if(width<768){
    ls_header_image='img/querty.jpg';
    ls_image_height=400;
    
    Swal.fire({
        title: 'Bienvenido mi portafolio de proyectos',
        html:'<b>La página recibirá actualizaciones próximamente.</b> '
        +'¡Espéralas! ',
        
        
        //--------------------------animacion
      
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
        //-----------------------Config Imagen
        imageUrl:ls_header_image,
        imageHeight:ls_image_height,
        imageWidth:ls_image_height*2,
        
        
        
        //----------------------background: '#fff',
        backdrop: 'rgba(98,98,98,0.8)',
        //--------------------------icon:'info',
        width: 1100,
        margin: 0,
        padding: '5em',
        //Animation notification
    
    });
}else{
//Pop up para PC
    Swal.fire({
        title: 'Bienvenido mi portafolio de proyectos',
        html:'<b>La página recibirá actualizaciones próximamente.</b> '
        +'¡Espéralas! ',
        
        
        //--------------------------animacion
      
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
        //-----------------------Config Imagen
        imageUrl:ls_header_image,
        imageHeight:ls_image_height,
        
        
        //----------------------background: '#fff',
        backdrop: 'rgba(98,98,98,0.8)',
        //--------------------------icon:'info',
        width: 1100,
        padding: '5em',
        //Animation notification
    
    });


}







/*




var width = window.innerWidth;




if(width<768){
    alert(window.screen.mensaje);
}else{
}


alert(window.screen.width);
    
    })
*/




