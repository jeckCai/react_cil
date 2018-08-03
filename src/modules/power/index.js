const React =require('react');
const Fetch = require('./../../fetch/fetch');
const Api = require('./../../cmp/ApiFactory');
const Header = require('./../comment/power/index_header');
const Conents = require('./../comment/power/index_content');
const Footer = require('./../comment/power/index_footer');
const Button = require('./../comment/power/index_button');

module.exports = React.createClass({
   
    getInitialState:function(){
    
        return {
           
        }
    },
    componentDidMount:function () {  
       this.getRichPowerInfoRecord();
    },
    getRichPowerInfoRecord:function(){
        let parmes={};
        Fetch({
            url:Api.rich.getRichPowerInfoRecord,
            data:{},
            type:'GET'
        }).then(rps=>{
            
            parmes={
                totalPower:rps.totalPower,
                listPowerRecord:rps.listPowerRecord
            }
            this.setState(parmes)
        })
    },
    
    render:function () { 
       return(
          
           <div style={styles.background} ref="bodyBox">
                <Header totalPower={this.state.totalPower}/>
                <Conents/>
                <Footer  listPowerRecord={this.state.listPowerRecord}/>
                <Button/>                
           </div>
       )
    }
})

var styles={
    background:{
        background:'#eee',
        height:'100vh',
    }
}