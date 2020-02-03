const element = (
    <div class="main">
        <div class="name">
            <h1>Yash Prakashbhai Shah</h1>
        </div>
        <div>
            <img class="img" src="myphoto.jpg" alt="My Photo" width="300" height="300"></img><br/><br/>
        </div>
        <div class="introFormat"> 
            I always try to learn new technologies and implement them to solve real world
            problems. I am much interested in web development and fascinated by the innovative 
            and emerging technologies inventing in this field.I enjoy reading fictional books 
            and playing cricket.
        </div>
        <div>
            <a class="gitLink" href="https://github.com/yashpshah">VIEW MY GITHUB REPO</a>
        </div>
    </div>
);
   
ReactDOM.render(element, document.getElementById('contents'));
