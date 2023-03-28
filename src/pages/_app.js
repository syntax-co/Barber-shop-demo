import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import Navbar from './components/Navbar';


export default function App({ Component, pageProps }) {

  return (
  <ThemeProvider theme={theme} >
    <Navbar />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
