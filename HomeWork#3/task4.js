function createDom()
{
    let div = document.getElementById('article');

    let articleEl = document.createElement('article');
    articleEl.classList.add('article');
    articleEl.classList.add('postList');

    let divContainerEl= document.createElement('div');
    divContainerEl.id = 'container';

    div.appendChild(articleEl);
    articleEl.appendChild(divContainerEl);
}

function addPost()
{
    let container = document.getElementById('container');
    let countPosts = container.children.length;
    let post = document.createElement('p');
    post.innerHTML = `Post ${countPosts+1}`;
    container.appendChild(post);


}
