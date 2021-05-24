import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import NavbarComp from './Components/Functional/NavbarComp'
import AboutComp from './Components/Functional/AboutComp'
import MahasiswaList from './Pages/Mahasiswa/MahasiswaList'
import MahasiswaAdd from './Pages/Mahasiswa/MahasiswaAdd'
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
                    <Route exact path="/mahasiswa" component={MahasiswaList} />
                    <Route exact path="/mahasiswa/add" component={MahasiswaAdd} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App
