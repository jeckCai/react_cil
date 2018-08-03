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
    getListUp:function () { 
        if(this.props.callback){
            this.props.callback(1)
        }
    },
    render:function () { 
        console.log(this.props.listPowerRecord);
       return(
          
           <div className="masonry_content" style={styles.magrin50} onClick={this.getListUp}>
              <div className="masonry_content_title">
              动力记录
              </div>
              <div className="masonry_footer_info">
              {this.props.listPowerRecord && this.props.listPowerRecord.length>0 ? this.props.listPowerRecord.map(function(item,idx){
                  return(
                    <div className="masonry_footer_item">
                        <div className="masonry_footer_item_info">
                            <p className="title">{item.title}</p>
                            <p className="time">{item.date}</p>
                        </div>
                        <div className="masonry_footer_item_num">
                            <p className="num">+{item.power}</p>
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
    magrin50:{
        marginBottom:'52px'
    },
    center:{
        textAlign:'center',
        color:'#DDD',
        padding:'20px 0'
    }
}