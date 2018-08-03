const React =require('react');

import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import './../masonry/index.css';

module.exports = React.createClass({
   
    getInitialState:function(){
        return {
            list:[{time:'2012-12-12',num:0.23231},{time:'2012-12-12',num:0.23231},{time:'2012-12-12',num:0.23231},{time:'2012-12-12',num:0.23231},{time:'2012-12-12',num:0.23231}]
        }
    },
    
    render:function () { 
        console.log(this.props.detailList);
       return(
          
           <div className="masonry_content">
              <div className="masonry_content_title">
              挖矿记录
              </div>
              <div className="masonry_footer_info">
              {this.props.detailList && this.props.detailList.length >0 ?  this.props.detailList.map(function(item,idx){
                  return(
                    <div className="masonry_footer_item">
                        <div className="masonry_footer_item_info">
                            <p className="title">{item.title}</p>
                            <p className="time">{item.takeTime}</p>
                        </div>
                        <div className="masonry_footer_item_num">
                            <p className="num">+{item.amount}</p>
                        </div>
                    </div>
                  )
              }.bind(this)):<div style={styles.center}>暂无记录</div>}
                
              </div>
           </div>
       )
    }
})

var styles={
    center:{
        textAlign:'center',
        color:'#DDD',
        padding:'20px 0'
    }
}