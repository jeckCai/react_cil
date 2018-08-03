const React =require('react');
const Fetch = require('./../../fetch/fetch');
const Api = require('./../../cmp/ApiFactory');
const Header = require('./../comment/masonry/index_title');
const Conents = require('./../comment/masonry/index_content');
const Footer = require('./../comment/masonry/index_footer');
module.exports = React.createClass({
   
    getInitialState:function(){
        return {
            
        }
    },
    componentDidMount:function () {  
        this.getMyRichDiamondRecordInfo()
    },
    getMyRichDiamondRecordInfo:function () {
        let parmes={};  
        Fetch({
            url:Api.rich.getMyRichDiamondRecordInfo,
            data:{},
            type:'GET'
        }).then(rps=>{
            parmes={
                totalDiamond:rps.totalDiamond,
                detailList:rps.detailList
            }
            this.setState(parmes);
        })
    },
    render:function () { 
       return(
          
           <div className="masonry_bg" style={styles.background}>
               <Header totalDiamond={this.state.totalDiamond}/>
               <Conents/>
               <Footer detailList={this.state.detailList}/>
           </div>
       )
    }
})

var styles={
    background:{
        background:'#eee'
    }
}