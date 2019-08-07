import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { url } from '../../api/ApiUrl';
import '../../assets/css/propertylist.css';
import '../NavBar';
import NavBar from '../NavBar';
export default class PropertyList extends Component {
    
    constructor (props) {
        super(props)

        this.state = {
            properties : []
        }
    }

    componentDidMount(){
        axios.get(`${url}/SunuImmo?action=liste`)
        .then(res =>{
            this.setState({
                properties : res.data,
            })
        })
    }               

    delete(id){
        axios.get(`${url}/SunuImmo?action=delete&id=${id}`)
        .then(res =>{
            window.location.reload();
        }).catch(err=>console.log(err));
    }

    render(){
     return(
         <div>
         <NavBar />
         <div className="listcontainer">
             <div className="container">
             <p class="h4 mb-4 text-center">LIST PROPERTIES</p>
             <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.properties.map(p =>{
                            return <tr key={p.idB}>
                                        <td>{p.idB}</td>
                                        <td>{p.nomB}</td>
                                        <td>{p.prix}</td>
                                        <td><button className="btn btn-danger" onClick={this.delete.bind(this,p.idB)}>Delete</button>
                                        <button className="btn btn-success"><Link className="btnEdit" to="/PropertyEdit">Edit</Link></button>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
             </table>
             <Link to="/addProperty"><button className="btn btn-primary">ADD PROPERTY</button></Link>
         </div>
         </div>
         
         
         </div>
         
     )
 }
}
