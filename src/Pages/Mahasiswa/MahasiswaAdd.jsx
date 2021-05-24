import { Alert, Button, Col, Form, FormGroup, FormText, Label, Input } from 'reactstrap'
import { PureComponent } from "react";
import axios from 'axios';

const apiHost = 'http://localhost:3001'

class MahasiswaAdd extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            nim: '',
            nama: '',
            jurusan: '',
            response: '',
            notif_display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addMahasiswa = () => {
        axios.post(apiHost + '/mahasiswa', {
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
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
                <h1>Add Mahasiswa</h1>

                <Alert color="success" style={{display: this.state.notif_display}}>
                    {this.state.response}
                </Alert>

                <Form className="mt-3">
                    <FormGroup row>
                        <Label for="nim" md={2}>NIM</Label>
                        <Col md={10}>
                            <Input
                                type="text"
                                name="nim"
                                id="nim"
                                value={this.state.nim}
                                onChange={this.handleChange}
                                placeholder="NIM"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="nama" md={2}>Nama</Label>
                        <Col md={10}>
                            <Input 
                                type="text" 
                                name="nama" 
                                id="nama" 
                                value={this.state.nama} 
                                onChange={this.handleChange} 
                                placeholder="Nama" 
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="jurusan" md={2}>Jurusan</Label>
                        <Col md={10}>
                            <Input 
                                type="text" 
                                name="jurusan" 
                                id="jurusan" 
                                value={this.state.jurusan} 
                                onChange={this.handleChange} 
                                placeholder="Jurusan" 
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button color="primary" onClick={this.addMahasiswa}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default MahasiswaAdd