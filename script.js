const flashcards = {
    HASS: [
        { question: "What are the key environmental changes impacting our planet today?", answer: "Key changes include climate change, primarily driven by greenhouse gas emissions, leading to severe weather patterns, rising sea levels, and ecological disruptions. Deforestation results in habitat loss and reduced biodiversity, while pollution severely impacts air and water quality." },
        { question: "What are the components of human wellbeing?", answer: "Human wellbeing is multidimensional, encompassing physical health, mental stability, emotional resilience, and social connections, which are essential for a fulfilled life and active participation in community affairs." },
        // Additional HASS flashcards...
    ],
    English: [
        { question: "What are the key elements of a digital story?", answer: "A digital story must integrate a compelling narrative structure with rich visual imagery, effective sound design, and emotional engagement to create a narrative that resonates with the audience and conveys deeper themes." },
        { question: "What should you analyze in an advertisement response?", answer: "Analyze the target audience by identifying demographic markers, assess persuasive techniques such as ethos, pathos, and logos, and evaluate the effectiveness of the message in influencing consumer behavior." },
        // Additional English flashcards...
    ],
    Math: [
        { question: "What is the formula for the area of a rectangle?", answer: "The area of a rectangle is calculated using the formula Area = length × width. This measurement is crucial for understanding space allocation in various real-life applications." },
        { question: "How do you calculate the surface area of a prism?", answer: "Surface Area is determined using the formula Surface Area = 2 × Base Area + Perimeter × Height. This approach accounts for both the bases and the lateral faces, providing a comprehensive understanding of the object's dimensions." },
        // Additional Math flashcards...
    ]
};

const container = document.querySelectorAll('.flashcards-container');

Object.keys(flashcards).forEach((subject, index) => {
    const flashcardsForSubject = flashcards[subject];
    flashcardsForSubject.forEach(card => {
        const flashcard = document.createElement('div');
        flashcard.className = 'flashcard';
        flashcard.innerHTML = `
            <div class="question">${card.question}</div>
            <div class="answer" style="display:none;">${card.answer}</div>
        `;
        
        // Add event listener to toggle answer display
        flashcard.addEventListener('click', () => {
            const answer = flashcard.querySelector('.answer');
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });

        container[index].appendChild(flashcard);
    });
});
