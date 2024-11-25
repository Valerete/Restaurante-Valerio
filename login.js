const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SignINLink');
const RegisterLink=document.querySelector('.SignUPLink');
RegisterLink.addEventListener('click',()=>{
    container.classList.add('active');
})
LoginLink.addEventListener('click',()=>{
    container.classList.remove('active');
})
