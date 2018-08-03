const React =require('react');
import './index.css';

module.exports = React.createClass({
   
    getInitialState:function(){
        return {
            
        }
    },
    
    render:function () { 
       return(
          
           <div className="conent_bg">
                <div className="conent_title">
                    <span className="conent_title_title">
                        瑞奇岛总居民
                    </span>
                    <span className="conent_title_info">
                    {this.props.totalRichPeople}
                    </span>
                </div>
                <div className="conent_info">
                    <span className="conent_title_title">
                        累计产出E钻数量
                    </span>
                    <span className="conent_title_info">
                    {this.props.totalRichDiamond}
                    </span>
                </div>
           </div>
       )
    }
})
