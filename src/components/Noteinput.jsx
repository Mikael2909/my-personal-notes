import React from 'react';
import { createRoot } from 'react-dom/client';
class Noteinput extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title : '',
            body : '',
            maxTitleLength:50,
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }
    onTitleChangeEventHandler(event){
        if (event.target.value.length <= this.state.maxTitleLength) {
            this.setState({ title: event.target.value });
        }
      
    }
   onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
              body: event.target.value,
            }
          });
    }
    onSubmitChangeEventHandler(event){
        event.preventDefault();
        this.props.addBook(this.state);
        this.setState({
          title: '',
         body: ''
      });
    }
    render(){
        const remainingChars = this.state.maxTitleLength - this.state.title.length;
        return(
            <>
             <div className="note-input">
                        <h2>Buat Catatan</h2>
                        <form onSubmit={this.onSubmitChangeEventHandler}>
                            <p className="note-input__title__char-limit">Sisa karakter: {remainingChars}</p>
                            <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler}  required />
                            <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
                            <button className="btn btn-outline-success" type="submit">Buat</button>
                            </form>
                    </div>
            </>
        )
    }
}
export default Noteinput;