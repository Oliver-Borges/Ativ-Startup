function enviar(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    if(nome === "" || email === "" || mensagem === ""){
        alert("Para enviar é necessário que todos os campos estejam preenchidos.");
        event.preventDefault();
    }else{
        if(!email.includes("@") || !email.includes(".com")){
            alert("Insira um email válido.");
            event.preventDefault();
        }else{
            alert("Mensagem enviada com sucesso!");
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menuToggle.checked = false;
        });
    });
    
    // Suaviza a rolagem para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação para os cards de valor e serviço ao entrar na viewport
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Selecionar os elementos para animar
    document.querySelectorAll('.valor-card, .quadrado-servico').forEach(card => {
        observer.observe(card);
    });
});
