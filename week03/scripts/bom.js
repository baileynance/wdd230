const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.foreach((chapter) => {
    displayList(chapter)
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);

        chaptersArray.push(input.value);

        setChapterList();

        input.value = '';
        input.focus();
    }
});

displayList = (item) => {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    
    li.textContent = item;
    deleteButton.textContent = 'X';
    deletebutton.classList.add('delete');
    
    li.append(deleteButton);
    list.append(li);
    
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
};

setChapterList = () => {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

deleteChapterList = (chapter) => {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList;
};