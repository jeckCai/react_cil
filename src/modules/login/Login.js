var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.hashHistory;
import {Toast} from 'antd-mobile';

module.exports = React.createClass({
    getInitialState:function () {
        Toast.loading('loding....',5,function(){console.log('_____')});
        return {
          
        }
    },
    
    componentDidMount:function(){
        
        let token = this.props.params.token;
        if(token){
            localStorage.setItem('token',token);
            setTimeout(()=>{
                History.replaceState(null,'index/');
            },200);
        }


        
       
    },

    render:function () {
        return (
            <div style={styles.center}>
                加载中...
            </div>
        )
      }
    
})


var styles={
    center:{
        color:'red',
        textAlign:'center'
    }
}