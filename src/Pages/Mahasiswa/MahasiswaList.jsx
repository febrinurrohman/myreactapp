import axios from 'axios'
import qs from 'querystring'
import { PureComponent } from "react"
import { Button, Nav, NavLink, Table } from 'reactstrap'
import { Link } from 'react-router-dom'

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

    deleteMahasiswa = (mhs_id) => {
        axios.delete(apiHost + '/mahasiswa', {
            data: qs.stringify({
                id: mhs_id
            }),
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }).then(
            res => {
                this.setState({
                    response: res.data.values,
                    notif_display: 'block'
                })
            }
        )
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
                                    <td>
                                        <Link to={
                                            {
                                                pathname: '/mahasiswa/edit',
                                                state: {
                                                    mhs_id: mahasiswa.mhs_id
                                                }
                                            }
                                        }><Button color="info" size="sm">Edit</Button></Link>{' '}
                                        <Button color="danger" size="sm" onClick={() => this.deleteMahasiswa(mahasiswa.mhs_id)}>Delete</Button>
                                    </td>
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