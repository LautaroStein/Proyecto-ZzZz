import Swal from 'sweetalert2'
const toasty = (icon, title) =>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      })
      
      Toast.fire({
        icon: icon,
        title: title
      })
}

export default toasty 