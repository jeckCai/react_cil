const React =require('react');

import './../power/index.css';
import {Link} from "react-router";

module.exports = React.createClass({
   
    getInitialState:function(){
        return {
            
        }
    },
    
    render:function () { 
       return(
		<Link to="/richuppower">
           <div className="button_title">
               <div style={styles.btn}>加速动力</div>
           </div>
        </Link>
       )
    }
})

var styles={
    btn:{
        fontSize: '20px',
        color:' #FFFFFF',
        letterSpacing: 0,
        textAlign:'center'
    }
}