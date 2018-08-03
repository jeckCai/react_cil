const React =require('react');
const Fetch = require('./../../fetch/fetch');
const Api = require('./../../cmp/ApiFactory');
import { Toast,NoticeBar } from 'antd-mobile';
const Header = require('./../comment/index/index_header');
const Conent = require('./../comment/index/index_conent');
const Footer =require('./../comment/index/index_footer');

module.exports = React.createClass({

    getInitialState:function(){
        Toast.hide();
        return {

        }
    },
    componentDidMount:function () { 
        this.getRichInfo()
     },
    getRichInfo:function(){
        let parmes={}
        Fetch({
            url:Api.rich.getRichInfo,
            data:{},
            type:'GET'
        }).then(rps=>{
            parmes={
                creatorsPeople:rps.creatorsPeople,
                dayRichDiamond:rps.dayRichDiamond,
                totalRichDiamond:rps.totalRichDiamond,
                totalRichPeople:rps.totalRichPeople,
                powerList:rps.powerList,
                notice:rps.notice
            }
            this.setState(parmes)
        })
    },
    render:function () { 
       return(
          
           <div style={styles.black}>
            <Header notice={this.state.notice}/>
            <Conent totalRichDiamond={this.state.totalRichDiamond} totalRichPeople={this.state.totalRichPeople}/>
            <Footer result={this.state.powerList}/>
           </div>

       )
    }
})



const styles={
    black:{
        background:'#343659'
    }
}
