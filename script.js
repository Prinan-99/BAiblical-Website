document.addEventListener('DOMContentLoaded', () => {
    const verses = [
        "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
        "I can do all things through Christ who strengthens me. - Philippians 4:13",
        "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
        "The Lord is my shepherd; I shall not want. - Psalm 23:1",
        "In the beginning, God created the heavens and the earth. - Genesis 1:1",
        "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
        "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
        "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid? - Psalm 27:1",
        "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law. - Galatians 5:22-23",
        "Come to me, all you who are weary and burdened, and I will give you rest. - Matthew 11:28",
        "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
        "And my God will meet all your needs according to the riches of his glory in Christ Jesus. - Philippians 4:19",
        "The name of the Lord is a fortified tower; the righteous run to it and are safe. - Proverbs 18:10",
        "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world. - John 16:33",
        "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline. - 2 Timothy 1:7",
        "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness. - Lamentations 3:22-23",
        "And we know that the Son of God has come and has given us understanding, so that we may know him who is true; and we are in him who is true, in his Son Jesus Christ. He is the true God and eternal life. - 1 John 5:20",
        "But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33",
        "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold. - Psalm 18:2"
    ];

    // Display a random verse
    const dailyVerseElement = document.getElementById('daily-verse');
    const randomIndex = Math.floor(Math.random() * verses.length);
    dailyVerseElement.textContent = verses[randomIndex];

    // Bible opening animation
    const bibleAnimation = document.getElementById('bible-animation');
    bibleAnimation.classList.remove('hidden');

    const book = bibleAnimation.querySelector('.book');
    book.classList.add('open');

    book.addEventListener('animationend', () => {
        bibleAnimation.classList.add('hidden');
    });
});
