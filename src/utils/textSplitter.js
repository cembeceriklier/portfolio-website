export const splitTextToWords = (textElement) => {
    
    const text = textElement.textContent;
    const words = text.split(' ');

    textElement.innerHTML = '';

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.classList.add('word');
        span.textContent = word;
        textElement.appendChild(span);
                
        if (index < words.length - 1) {
            textElement.appendChild(document.createTextNode(' '));
        }

        setTimeout(() => {
            span.classList.add('visible');
        }, 10 * index); 
    });
};