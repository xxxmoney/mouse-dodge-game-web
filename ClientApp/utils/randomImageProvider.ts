
const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/seed/${randomIndex}/200/300`;
}

export { getRandomImageUrl }
