import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import NavbarComp from './Components/Functional/NavbarComp'
import AboutComp from './Components/Functional/AboutComp'
import HomePage from './Components/Functional/HomePage'
import DetailComp from './Components/Functional/DetailComp'

const App = () => {
    return (
        <BrowserRouter>
            <NavbarComp/>
            
            <Container>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutComp} />
                    <Route exact path="/detail/:id" component={DetailComp} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App
