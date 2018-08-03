const React =require('react');

import './../power/index.css';

module.exports = React.createClass({
   
    getInitialState:function(){
        return {
            
        }
    },
    
    render:function () { 
        console.log(this.props);
       return(

           <div className="poser_title">
               <div className="poser_title_title">当前动力</div>
               <div className="poser_title_num">{this.props.totalPower}</div>
           </div>
       )
    }
})