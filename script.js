document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case 'z':
            playSound("sounds/key16.mp3");
            break;
        case 'x':
            playSound("sounds/key17.mp3");
            break;
        case 'c':
            playSound("sounds/key18.mp3");
            break;
        case 'v':
            playSound("sounds/key19.mp3");
            break;
        case 'b':
            playSound("sounds/key20.mp3");
            break;
        case 'n':
            playSound("sounds/key21.mp3");
            break;
        case 'm':
            playSound("sounds/key22.mp3");
            break;
        case ',':
            playSound("sounds/key23.mp3");
            break;
        case '.':
            playSound("sounds/key24.mp3");
            break;
        case '/':
            playSound("sounds/key10.mp3");
            break;
        case 'k':
            playSound("sounds/key11.mp3");
            break;
        case 'l':
            playSound("sounds/key12.mp3");
            break;
        case ';':
            playSound("sounds/key13.mp3");
            break;
        // Add more cases for other keys as needed

        default:
            // Handle other keys if needed
            break;
    }
});

function playSound(soundPath) {
    var audio = new Audio(soundPath);
    audio.play();
}
