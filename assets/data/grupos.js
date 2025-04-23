// Cargar datos de grupos
async function cargarGrupos() {
    const response = await fetch('assets/data/grupos.json');
    const grupos = await response.json();
    return grupos;
}

// Mostrar un grupo específico (ej: primer grupo)
async function mostrarGrupo() {
    const grupos = await cargarGrupos();
    const grupo = grupos[0]; // Cambiar índice para mostrar otros grupos
    
    document.getElementById('groupBanner').src = grupo.banner;
    document.getElementById('groupName').textContent = grupo.nombre;
    
    // Configurar hover para descripción
    const banner = document.querySelector('.group-banner');
    banner.addEventListener('mouseover', function() {
        this.setAttribute('title', grupo.descripcion);
    });
}

// Optimización de banners
function optimizarBanner(imgElement) {
    imgElement.style.width = '100%';
    imgElement.style.height = '100px';
    imgElement.style.objectFit = 'cover';
    imgElement.loading = 'lazy'; // Carga diferida
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    mostrarGrupo();
    optimizarBanner(document.getElementById('groupBanner'));
});