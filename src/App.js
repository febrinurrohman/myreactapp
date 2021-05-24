import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import AboutComp from './Components/Functional/AboutComp'
import DetailComp from './Components/Functional/DetailComp'
import HomePage from './Components/Functional/HomePage'
import MahasiswaList from './Pages/Mahasiswa/MahasiswaList'
import MahasiswaAdd from './Pages/Mahasiswa/MahasiswaAdd'
import MahasiswaEdit from './Pages/Mahasiswa/MahasiswaEdit'
import NavbarComp from './Components/Functional/NavbarComp'

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
                    <Route exact path="/mahasiswa/edit" component={MahasiswaEdit} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App
