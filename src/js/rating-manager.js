const btn = document.querySelector('.rate-btn');
const post = document.querySelector('.post');
const widget = document.querySelector('.star-widget');
const editBtn = document.querySelector('.edit');

btn.onclick = () => {
    widget.style.display = 'none';
    post.style.display = 'block';
    editBtn.onclick = () => {
        widget.style.display = 'block';
        post.style.display = 'none';
    }
    return false;
}