const Book = (props) => {
    return (
        <div className="answer" onClick={() => props.checkAnswer(props.title)}>
            <h4>{props.title}</h4>
        </div>
    );
}
/* deprectated in React 15.5
Book.propTypes = {
    title: PropTypes.string.isRequired
}
*/

class Quiz extends React.Component {

    static selectQuiz = (data) => {
        let books = _.shuffle(data.reduce((p, c, i) => {
            return p.concat(c.books);
        }, [])).slice(0, 4);

        let answer = books[_.random(books.length - 1)];

        return {
            books: books,
            author: _.find(data, (author) => {
                return author.books.some((title) => {
                    return title === answer;
                })
            })
        };
    }

    static initialState = (data) => {
        return _.extend({
            bgClass: 'neutral',
            showContinue: false
        }, Quiz.selectQuiz(data))
    }

    state = Quiz.initialState(this.props.data);

    checkAnswer = (title) => {
        let isCorrect = this.state.author.books.some((t) => {
            return t === title;
        });
        this.setState((prevState) => ({
            bgClass: isCorrect ? "pass" : "fail",
            showContinue: isCorrect
        }));
    }

    newQuiz = () => this.setState(Quiz.initialState(this.props.data));

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={this.state.author.imageUrl} className="authorimage" />
                    </div>
                    <div className="col-sm-7">
                        {this.state.books.map((title, i) =>
                            <Book key={i} title={title} checkAnswer={this.checkAnswer} />
                        )}
                    </div>
                    <div className={"col-sm-1 " + this.state.bgClass}>
                    </div>
                </div>
                {this.state.showContinue ? (
                    <div className="row">
                        <div className="col-sm-12">
                            <input onClick={this.newQuiz} 
                                   type="button"
                                   className="btn btn-primary btn-lg pull-right"
                                   value="Continue" />
                        </div>
                    </div>
                ) : <span />}
            </div>
        );
    }
}
/* deprecated in React 15.5
Quiz.propTypes = {
    books: React.PropTypes.array.isRequired
}
*/

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
        books: ['The Shining', 'IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }

]

ReactDOM.render(
    <Quiz data={data} />,
    document.getElementById('app')
);