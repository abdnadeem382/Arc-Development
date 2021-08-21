import React, {useState} from 'react';
import Header from './UI/Header/Header'
import Footer from './UI/Footer/Footer'
import LandingPage from './LandingPage/LandingPage';
import ServicesPage from './ServicesPage/ServicesPage';
import CustomSoftware from './CustomSoftwarePage/CustomSoftware';
import MobileDevPage from './MobileDevPage/MobileDevPage';
import WebDevPage from './WebDevPage/WebDevPage';
import RevPage from './RevolutionPage/RevolutionPage';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import ContactPage from './ContactPage/ContactPage';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './UI/Theme';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      <Switch>
        <Route exact path='/' render={(props)=><LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/services'  render={(props)=><ServicesPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/customsoftware' render={(props)=><CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/mobileapps' render={(props)=><MobileDevPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
        <Route exact path='/website' render={(props)=><WebDevPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
        <Route exact path='/revolution' render={(props)=><RevPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
        <Route exact path='/about' render={(props)=><AboutUsPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
        <Route exact path='/contact' render={(props)=><ContactPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
        <Route exact path='/estimate' component={()=><div>Estimate</div>}/>
      </Switch>
      <Footer  setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
