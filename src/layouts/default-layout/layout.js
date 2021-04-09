import Header from './header'
import AppBar from '@material-ui/core/AppBar';
import './layout.css'

function defaultLayout({children}) {
    return(
       <div className='app-main'>
           <AppBar position="static">
               <Header />
           </AppBar>
           <div className='main-content'>
               {children}
           </div>
       </div>
    )
}

export default defaultLayout