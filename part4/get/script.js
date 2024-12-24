const userList = document.getElementById('user-list');
const commentList = document.getElementById('comment-list');

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Ошибка сети');
        const users = await response.json();

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email})`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
    }
}

async function fetchComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=15');
        if (!response.ok) throw new Error('Ошибка сети');
        const comments = await response.json();

        comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = `${comment.name}: ${comment.body}`;
            commentList.appendChild(li);
        });
    } catch (error) {
        console.error('Ошибка при получении комментариев:', error);
    }
}

fetchUsers();
fetchComments();
