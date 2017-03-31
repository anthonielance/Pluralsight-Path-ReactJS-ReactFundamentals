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

ReactDOM.render(
    <Quiz  books={['The Lord of The Rings','The Iliad']} />,
    document.getElementById('app')
);