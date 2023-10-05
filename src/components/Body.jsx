import React from 'react';
import { createRoot } from 'react-dom/client';
import Noteinput from './Noteinput';
import { getInitialData, showFormattedDate } from '../utils/index';
class Body extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            booklist: getInitialData(),


        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddBookHandler = this.onAddBookHandler.bind(this);
      
    }
    onDeleteHandler(id) {
        const booklist = this.state.booklist.filter(booklist => booklist.id !== id);
        this.setState({ booklist });
    }
    onArchiveHandler(id) {
        const booklist = this.state.booklist.map(book => {
            if (book.id === id) {
                return { ...book, archived: !book.archived };
            }   
            return book;
        });
        this.setState({ booklist });
    }
    onAddBookHandler({title,body}){
        const lastBook = this.state.booklist[this.state.booklist.length - 1];
        const newId = lastBook ? lastBook.id + 1 : 1;
        const newBook = {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
        };
    
        // Tampilkan objek baru di console
        console.log(newBook.createdAt);
    
        this.setState(prevState => ({
            booklist: [
                ...prevState.booklist,
                newBook
            ]
        }));
          
    }
    render() {

        // const activeNotes = this.state.booklist.filter(book => !book.archived);
        // const archivedNotes = this.state.booklist.filter(book => book.archived);
        const keywords = this.props.searchTerm.split(" ").map(keyword => keyword.toLowerCase());

        const filteredNotes = this.state.booklist.filter(item => {
            return keywords.every(keyword => item.title.toLowerCase().includes(keyword));
        });
        const activeNotes = filteredNotes.filter(item => !item.archived);
        const archivedNotes = filteredNotes.filter(item => item.archived);

        return (
            <>
                <div className="note-app__body bg-primary bg-opacity-25">
                    <Noteinput addBook={this.onAddBookHandler}/>
                    <h2>Catatan Aktif</h2>
                    <div className="notes-list" >
                        {activeNotes.map(item => (
                            <div className="note-item" key={item.id}>
                                <div className="note-item__content" >
                                    <h3 className="note-item__title">{item.title}</h3>
                                    <p className="note-item__date">{showFormattedDate(item.createdAt)}</p>
                                    <p className="note-item__body">{item.body}</p>
                                    {item.archived && <span></span>}
                                </div>
                                <div className="note-item__action ">
                                    <button className="note-item__delete-button btn btn-danger" onClick={() => this.onDeleteHandler(item.id)}><i className="bi bi-trash3"></i></button>
                                    <button className="note-item__archive-button btn btn-warning" onClick={() => this.onArchiveHandler(item.id)}><i class="bi bi-arrow-down"></i></button></div>
                            </div>



                        ))}
                    </div>
                    <h2>Arsip</h2>
                    {archivedNotes.length === 0 &&
                        <p className="notes-list__empty-message" style={{ textAlign: 'center', marginTop: '50px' }}>Tidak ada catatan</p>
                    }
                    <div className="notes-list">
                        {archivedNotes.map(item => (
                            <div className="note-item" key={item.id}>
                                <div className="note-item__content">
                                    <h3 className="note-item__title">{item.title}</h3>
                                    <p className="note-item__date">{showFormattedDate(item.createdAt)}</p>
                                    <p className="note-item__body">{item.body}</p>
                                    {item.archived && <span></span>}
                                </div>
                                <div className="note-item__action">
                                    <button className="note-item__delete-button btn btn-danger" onClick={() => this.onDeleteHandler(item.id)}>
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                    <button className="note-item__archive-button btn btn-warning" onClick={() => this.onArchiveHandler(item.id)}>
                                    <i class="bi bi-arrow-up"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                </div>
            </>
        )
    }

}
export default Body;