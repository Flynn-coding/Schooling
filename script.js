const flashcards = [
    // HASS Flashcards
    { question: "What are the key environmental changes impacting our planet today?", answer: "Factors include climate change, deforestation, pollution, and loss of biodiversity." },
    { question: "What are the components of human wellbeing?", answer: "Human wellbeing encompasses physical, mental, emotional, and social health." },
    { question: "What major themes are covered in the HASS curriculum?", answer: "Themes include geography, civics, history, and economics." },
    { question: "What steps are involved in source analysis?", answer: "Identify the source, assess credibility, evaluate context, and analyze content." },
    { question: "How do you prepare for an effective oral presentation?", answer: "Research your topic, organize your points, practice delivery, and engage your audience." },
    { question: "What strategies can you use for writing an in-class essay?", answer: "Outline main ideas, manage time wisely, and revise before submission." },
    { question: "How can you best prepare for the final exam?", answer: "Review past assessments, study key concepts, and practice essay writing." },
    { question: "What are the effects of climate change on biodiversity?", answer: "Climate change can lead to habitat loss, species extinction, and altered ecosystem dynamics." },
    { question: "How does deforestation impact local communities?", answer: "Deforestation can lead to loss of livelihoods, displacement, and decreased access to resources." },
    { question: "What is the significance of human rights in promoting wellbeing?", answer: "Human rights ensure access to basic needs, security, and opportunities for all individuals." },
    { question: "What factors contribute to social inequality?", answer: "Social inequality can stem from economic disparities, education access, and systemic discrimination." },

    // English Flashcards
    { question: "What are the key elements of a digital story?", answer: "Narrative structure, visual imagery, sound, and emotional connection." },
    { question: "What should you analyze in an advertisement response?", answer: "Target audience, persuasive techniques, and message effectiveness." },
    { question: "How can you prepare for an in-class essay on a novel?", answer: "Familiarize yourself with themes, character development, and key plot points." },
    { question: "What does a multimodal presentation involve?", answer: "Combining visual, auditory, and textual elements to enhance understanding." },
    { question: "What aspects should you consider in a film analysis essay?", answer: "Cinematic techniques, themes, character arcs, and cultural context." },
    { question: "What makes a feature article engaging?", answer: "A strong lead, compelling anecdotes, and a clear focus on the subject." },
    { question: "How can you effectively convey a message in a digital story?", answer: "Use visuals and audio that complement the narrative and evoke emotional responses." },
    { question: "What are the characteristics of an effective advertisement?", answer: "Clear messaging, appealing visuals, emotional appeal, and a strong call to action." },
    { question: "What is the purpose of a feature article?", answer: "To inform and engage readers by providing in-depth coverage of a specific topic." },
    { question: "How do you structure an essay on a film?", answer: "Introduction with a thesis statement, body paragraphs analyzing key elements, and a conclusion." },
    { question: "What are common themes in contemporary literature?", answer: "Identity, social justice, and the human condition are frequently explored themes." },
    { question: "What techniques can enhance your storytelling in a digital story?", answer: "Use pacing, sound design, and visual transitions to maintain audience engagement." },
];

const container = document.getElementById('flashcards-container');

flashcards.forEach(card => {
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

    container.appendChild(flashcard);
});
