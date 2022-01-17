import React from 'react'
import { BrowserRouter, Link, Route} from 'react-router-dom';
import StreamList from './streams/StreamList'
import StreamEdit from './streams/StreamEdit'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'



export default function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                   <Route path="/" exact component={StreamList}/>
                   <Route path="/streams/new" component={StreamCreate}/>
                   <Route path="/streams/edit" component={StreamEdit}/>
                   <Route path="/streams/delete" component={StreamDelete}/>
                   <Route path="/streams/show" component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    )
}
