import axios from 'axios'
import { PureComponent } from "react"
import { Button, Nav, NavLink, Table } from 'reactstrap'

const apiHost = 'http://localhost:3001'

class MahasiswaList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            mahasiswa: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(apiHost + '/mahasiswa').then(res => {
            this.setState({
                mahasiswa: res.data.values
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Mahasiswa</h1>

                <Nav className="mb-3">
                    <NavLink href="/mahasiswa/add"><Button color="primary">Tambah</Button></NavLink>
                </Nav>

                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.mahasiswa.map(mahasiswa =>
                                <tr key={mahasiswa.mhs_id}>
                                    <td>{mahasiswa.mhs_nim}</td>
                                    <td>{mahasiswa.mhs_nama}</td>
                                    <td>{mahasiswa.mhs_jurusan}</td>
                                    <td>Edit | Delete</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default MahasiswaList