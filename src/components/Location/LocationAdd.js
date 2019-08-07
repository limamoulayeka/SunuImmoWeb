import React, { Component } from 'react';
import { url } from '../../api/ApiUrl';
import axios from 'axios';
import '../../assets/css/locationadd.css';
import '../NavBar';
import NavBar from '../NavBar';

export default class LocationAdd extends Component {

    constructor (props) {
        super(props)

        this.state = {
            properties: [],
            dt: new Date(),
            cni: 0,
            nom : '',
            tel : 0,
            profession : '',
            adresse : '',
            datenaiss : '',
            email : '',
            dateFormat: require('dateformat')
            
          }
        
        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.Insert = this.Insert.bind(this)
    }

    componentDidMount(){
        axios.get(`${url}/SunuImmo?action=liste`)
        .then(res =>{
            this.setState({
                properties : res.data,
            })
        })
    } 
    
    onChangeHandle(event) {
        event.preventDefault();
        this.setState({
            
        })
    }

    onCniChange = (event) => {
        event.preventDefault();
        const { value,name } = event.target;
        this.setState({
        [name]: value    
        });
        console.log("zee");

        axios.get(`${url}/Location?action=findCientByCni&cni=${value}`)
        .then(res =>{
            if(res.data != null){
                if(this.state.cni == parseInt(res.data.INE,10)){
                    this.setState({
                        nom : res.data.nomcomplet,
                        tel : res.data.tel,
                        profession : res.data.profession,
                        adresse : res.data.adresse,
                        datenaiss : res.data.datenaiss,
                        email : res.data.email
                    })
                }
            }
        })
    }

     //199677345

    Insert(event) {
        event.preventDefault();
        let nom = this.state.name;
        let prix = this.state.price;
        axios.post(`${url}/SunuImmo?action=insert&nom=${nom}&prix=${prix}`,{
            name: nom,
            price: prix
        })
        .then(res => {
            this.props.history.push('/listLocation')
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
                <p className="h4 mb-4 text-center">ADD LOCATION</p>
                <div className="form-group">
                        <div className="form-group">
                            <label className="control-label">Carte ID<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" name="ine" id="ine"  required onChange={this.onCniChange}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Nom<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" name="nom" id="nom" value={this.state.nom} required/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Telephone<span className="text-danger">*</span></label>
                            <input className="form-control" type="number" name="tel" id="tel" value={this.state.tel} required/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Profession<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" name="profession" id="profession" value={this.state.profession} required/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Adresse<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" name="adresse" id="adresse" value={this.state.adresse} required/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Date Naissance<span className="text-danger">*</span></label>
                            <input className="form-control" type="date" name="datenaiss" id="datenaiss" value={this.state.datenaiss} required/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Email<span className="text-danger">*</span></label>
                            <input className="form-control" type="email" name="email" id="email" value={this.state.email} required/>
                        </div>
                            </div>
                        <div className="form-group">
                        <label className="control-label">Date Debut Location<span className="text-danger">*</span></label>
                            
                            <input className="form-control" type="text" name="datedebloc" id="datedebloc" readOnly  value={this.state.dateFormat(this.state.dt,"dd/mm/yyyy")} />
                        </div>
                        <div className="form-group">
                        <label className="control-label">Date Fin Location<span className="text-danger">*</span></label>
                           
                            <input className="form-control" type="date" name="datefinloc" id="datefinloc" required/>
                        </div>
                        <div className="form-group">
                                <div className=""> 
                                    <label for="bien">Bien<span className="text-danger">*</span></label>
                                </div>
                                <div className="">
                            <select className="form-control" name="bien" id="bien" onChangeHandle={this.onChangeHandle}>
                               <option value="">Selectionner un Bien</option>
                                {
                        this.state.properties.map(p =>{
                            return <option key={p.idB} value={p.idB}>
                                        
                                        {p.nomB}
                                        
                                        </option>
                        })
                    }
                                    </select> 
                                </div>
                        </div>
                        <div className="form-group">
                        <label className="control-label">Bailleur<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" name="bailleur" id="bailleur" readonly  />
                        </div>
                        <div className="form-group">
                        <button className="btn btn-primary btn-block my-4" >Submit</button>
						 </div>
                
                </form>
                </div>
            </div>
            </div>
        )
    }
}