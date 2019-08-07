import React, { Component } from 'react';
import { url } from '../../api/ApiUrl';
import axios from 'axios';
import '../../assets/css/propertyadd.css';
import '../NavBar';
import NavBar from '../NavBar';


export default class PropertyAdd extends Component {

    constructor (props) {
        super(props)

        this.state = {
            donors : [],
            name : '',
            price : 0
               
        }
        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.Insert = this.Insert.bind(this)
    }

    componentDidMount(){
        axios.get(`${url}/Bailleur?action=listbailleur`)
        .then(res =>{
            this.setState({
                donors : res.data,
            })
        })
    } 

    onChangeHandle(event) {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value, 
            [event.target.price] : event.target.value
        })
    }

    Insert(event) {
        event.preventDefault();
        let nom = this.state.name;
        let prix = this.state.price;
        axios.post(`${url}/SunuImmo?action=insert&nom=${nom}&prix=${prix}`,{
            name: nom,
            price: prix
        })
        .then(res => {
            this.props.history.push('/listProperty')
            console.log(res.data)
        }).catch(err=>console.log(err));
    }

    render ()  {
        return(
            <div>
            <NavBar />
            <div className="addcontainer">
                <div className="container">
                <form onSubmit={this.Insert} className="border border-floralwhite  p-5">
                <p class="h4 mb-4 text-center">ADD PROPERTY</p>
                <div className="form-group">
                <div className="">
                <label htmlFor="name">Name<span className="text-danger">*</span></label>
                </div>
                <div className="">
               <input className="form-control" type="text" name="name" id="name" onChange={this.onChangeHandle} required/>
                </div>
                </div>
                <div className="form-group">
                <div className="">
                <label htmlFor="price">Price<span className="text-danger">*</span></label>
                </div>
                <div className="">
               <input className="form-control" type="text" name="price" id="price" onChange={this.onChangeHandle} required/>
                </div>
                </div>
                <div className="form-group">
                                <div className=""> 
                                    <label for="bailleur">Lessor</label>
                                </div>
                                <div className="">
                            <select className="form-control" name="bailleur" id="bailleur" onChangeHandle={this.onChangeHandle}>
                               <option value="">Select a Lessor</option>
                                {
                            this.state.donors.map(d =>{
                            return <option key={d.idBa} value={d.idBa}>
                                        
                                        {d.nomBa}
                                        
                                        </option>
                                    })
                                }
                                    </select> 
                                </div>
                        </div>
                <button class="btn btn-primary btn-block my-4" >Submit</button>
                </form>
                </div>
            </div>
            </div>
        )
    }
}