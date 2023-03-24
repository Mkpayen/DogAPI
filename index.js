
fetch("https://dog.ceo/api/breed/hound/images", {
    method: "GET"
})

.then(respones => respones.json()) 
.then(item => {

    get_random_dog_image(item)
    console.log(item)
})
.catch (err => (err));


const get_random_dog_image = ({message, status}) => {
    const main = document.getElementsByTagName('main')[0];
    const img = document.createElement('img');
    const text = document.createElement('p');
    text.textContent = status;
    // main.append(text);
    img.src = message[2];
    main.append(img)
}
