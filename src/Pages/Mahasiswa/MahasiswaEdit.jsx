import { Alert, Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
// import qs from 'querystring';

const { PureComponent } = require("react");

const apiHost = 'http://localhost:3001'

class MahasiswaEdit extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            mhs_id: props.location.state.mhs_id,
            mhs_nim: '',
            mhs_nama: '',
            mhs_jurusan: '',
            response: '',
            notif_display: 'none'
        }
    }

    componentDidMount() {
        axios.get(apiHost + '/mahasiswa/' + this.state.mhs_id).then(res => {
            this.setState({
                mhs_nim: res.data.values[0].mhs_nim,
                mhs_nama: res.data.values[0].mhs_nama,
                mhs_jurusan: res.data.values[0].mhs_jurusan,
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editMahasiswa = () => {
        axios.put(apiHost + '/mahasiswa', {
            id: this.state.mhs_id,
            nim: this.state.mhs_nim,
            nama: this.state.mhs_nama,
            jurusan: this.state.mhs_jurusan
        }).then(
            res => {
                this.setState({
                    response: res.data.values,
                    notif_display: 'block'
                })
            }
        )
    }

    render(){
        return (
            <div>
                <h1>Edit Mahasiswa</h1>

                <Alert color="success" style={{ display: this.state.notif_display }}>
                    {this.state.response}
                </Alert>

                <Form className="mt-3">
                    <FormGroup row>
                        <Label for="mhs_nim" md={2}>NIM</Label>
                        <Col md={10}>
                            <Input
                                type="text"
                                name="mhs_nim"
                                id="mhs_nim"
                                value={this.state.mhs_nim}
                                onChange={this.handleChange}
                                placeholder="NIM"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="mhs_nama" md={2}>Nama</Label>
                        <Col md={10}>
                            <Input
                                type="text"
                                name="mhs_nama"
                                id="mhs_nama"
                                value={this.state.mhs_nama}
                                onChange={this.handleChange}
                                placeholder="Nama"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="mhs_jurusan" md={2}>Jurusan</Label>
                        <Col md={10}>
                            <Input
                                type="text"
                                name="mhs_jurusan"
                                id="mhs_jurusan"
                                value={this.state.mhs_jurusan}
                                onChange={this.handleChange}
                                placeholder="Jurusan"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button color="primary" onClick={this.editMahasiswa}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default MahasiswaEdit