import React from 'react';
import { createRoot } from 'react-dom/client';
import Notesearch from './Notesearch';
class Header extends React.Component {
    
    
    render() {
        return (
          <> 
                <div className="note-app__header ">
                    <h1>Notes</h1>
                  <Notesearch onSearch={this.props.onSearch}/>
                </div>
            </>
            
        );
    }
}
export default Header;