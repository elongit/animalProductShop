import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store.js'
import {Provider} from 'react-redux'
import './assets/css/style.css'
createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <App />
   </Provider>

)
