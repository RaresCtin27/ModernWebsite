const currentYear=new Date().getFullYear();
document.getElementById('dynamicYear').textContent=currentYear;

document.getElementById('toggleMenu').addEventListener('click', function () {
    document.getElementById('nav-list').classList.toggle('show')
});


