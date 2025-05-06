document.addEventListener('DOMContentLoaded', () => {
    const animationContainer = document.querySelector('.background-animation');
    const colors = ['#D4A373', '#A67B5B', '#808080', '#F5F5F5']; // Amarillo quemado, Café, Gris, Blanco
    const numElements = 20; // Número de burbujas y figuras

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = getRandom(20, 60);
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.left = `${getRandom(0, 100)}vw`;
        bubble.style.top = `${getRandom(0, 100)}vh`;
        bubble.style.animation = `float ${getRandom(6, 12)}s linear infinite, fade ${getRandom(1, 3)}s ease-in-out infinite alternate`;
        bubble.style.opacity = getRandom(0.2, 0.7);
        animationContainer.appendChild(bubble);
    }

    function createShape() {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        const size = getRandom(30, 70);
        const isCircle = Math.random() < 0.5; // 50% de probabilidad de ser círculo
        shape.style.width = `${size}px`;
        shape.style.height = `${isCircle ? size : getRandom(20, size)}px`;
        shape.style.borderRadius = isCircle ? '50%' : '0';
        shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        shape.style.left = `${getRandom(0, 100)}vw`;
        shape.style.top = `${getRandom(0, 100)}vh`;
        shape.style.animation = `move ${getRandom(8, 15)}s linear infinite, colorChange ${getRandom(2, 5)}s ease-in-out infinite alternate`;
        shape.style.opacity = getRandom(0.15, 0.5);
        animationContainer.appendChild(shape);
    }

    for (let i = 0; i < numElements; i++) {
        createBubble();
        createShape();
    }

    // Estilos de animación (se agregan al final para evitar problemas de definición)
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes float {
            0% { transform: translateY(0); opacity: 0.2; }
            50% { opacity: 0.7; }
            100% { transform: translateY(-100vh); opacity: 0; }
        }

        @keyframes fade {
            0% { opacity: 0.2; }
            100% { opacity: 0.7; }
        }

        @keyframes move {
            0% { transform: translate(0, 0) rotate(0deg); opacity: 0.15; }
            50% { opacity: 0.5; }
            100% { transform: translate(${getRandom(-50, 50)}vw, -${getRandom(50, 100)}vh) rotate(${getRandom(-360, 360)}deg); opacity: 0.15; }
        }

        @keyframes colorChange {
            0% { background-color: ${colors[0]}; }
            33% { background-color: ${colors[1]}; }
            66% { background-color: ${colors[2]}; }
            100% { background-color: ${colors[3]}; }
        }
    `;
    document.head.appendChild(styleSheet);
});