const React =require('react');


import './../masonry/index.css';

module.exports = React.createClass({
   
    getInitialState:function(){
        return {
            
        }
    },
    
    render:function () { 
       return(
          
           <div className="masonry_title">
               <div className="masonry_title_title">E钻总数</div>
               <div className="masonry_title_num">{this.props.totalDiamond}</div>
               <div className="masonry_title_count"><span>冻结E钻总数:0</span></div>
           </div>
       )
    }
})