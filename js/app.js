const Book = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
        </div>
    );
}
Book.propTypes = {
    title: React.PropTypes.string.isRequired
}

const Quiz = (props) => {
    return (
        <div>
            {props.books.map((title, i) =>
                <Book key={i} title={title} />
            )}
        </div>
    );
}
Quiz.propTypes = {
    books: React.PropTypes.array.isRequired
}

const data = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.png',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining','IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield','A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet','Macbeth','Romeo and Juliet']
    }

]

ReactDOM.render(
    <Quiz  books={['The Lord of The Rings','The Iliad']} />,
    document.getElementById('app')
);