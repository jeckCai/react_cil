const React =require('react');
const Device = require('./../../../device/device');
import './index.css';
import {Link} from "react-router";

module.exports = React.createClass({
   
    getInitialState:function(){
        return {
            list:[{name:'历史',age:12,id:1},{name:'历史',age:12,id:1},{name:'历史',age:12,id:1},{name:'历史',age:12,id:1},{name:'历史',age:12,id:1},{name:'历史',age:12,id:1}]
        }
    },
    
    render:function () { 
        
        return(
           
           <div className="footer_bg">
                <div style={styles.center}><img style={styles.img} src={require('./../../../images/power_rankings@2x.png')}/></div>
                <div className="footer_content">
                    <div className="footer_info">
                        <div className="footer_img">
                            <div>
                                <img src={require('./../../../images/decorating_point@2x.png')}/>
                                <p>居民排名</p>
                            </div>
                            <div><img src={require('./../../../images/decorating_point@2x.png')}/><p>动力值</p></div>
                        </div>
                        <div className="footer_item">
                            {
                              this.props.result &&  this.props.result.map(function(item,idx){
                                    return(
                                        <div className="item">
                                            {idx==0 ? <img className="item_img" src={require('./../../../images/the_first_icon@2x.png')}/> :idx==1?<img className="item_img" src={require('./../../../images/the_second_icon@2x.png')}/>:idx==2?<img className="item_img" src={require('./../../../images/the_third_icon@2x.png')}/>: <span className="item_img">{idx}</span>}
                                            <span className="item_name">{item.nickName}</span>
                                            <span className="item_age">{item.totalPower}</span>
                                        </div>
                                    )
                                }.bind(this))
                            }
                            
                        </div>
                        <div className="footer-buttom">
                            <Link to="/richuppower">
                                <p>如何提升排名?</p>
                            </Link>
                        </div>
                    </div>
                </div>
           </div>
       )
    }
})

var styles={
    center:{
        textAlign:'center'
    },
    img:{
        width:'89px',
        height:'17px'  
    },
    item_name:{
        width:Device.clientWidth-50+'px'
    },
    item_age:{
        width:Device.clientWidth-100+'px'
    },
    hide:{
        display:'none'
    },
    show:{
        display: 'inline-block'
    }
}
