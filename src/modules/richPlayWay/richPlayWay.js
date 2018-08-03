import React from 'react';
import "./richPlayWay.css";




module.exports = React.createClass({
  render(){
    return(
      <div className="richplaybox">
          <div className="richplaytopbg"><img src={require("../../images/banner@2x.png")} width="100%" /></div>
          <div className="richplaywhattop">
              <div className="whattop_left"><img src={require("../../images/decorate1@2x.png")} width="100%" /></div>
              <div className="whattop_middle" ><img src={require("../../images/note1@2x.png")} width="100%" /></div>
              <div className="whattop_right"><img src={require("../../images/decorate2@2x.png")} width="100%" /></div>
          </div>
          <div className="richplaywhat_con">
              <div className="richplaywhat_con_txt">
                E店依托于区块链加密存储技术为每一个用户提供高度安全的电子商务平台，E店用户在平台内所有的行为数据都可以产生价值并为己所用，实现数据价值最大化。
              </div>
              <div className="richplaywhat_con_ul">
                <li>E钻是岛民通过E店进行各项活动获得活跃度而产生的奖励，可以用于E店内多个项目的消费及兑换，随着瑞奇岛搭建逐渐完善，E钻将发挥愈发重要的作用。</li>
                <li>每日获得E钻的多少取决于动力值，动力值越多，每日获得的E钻就越多。动力值大于40的岛民将有机会获得被称为“紫钻”的额外E钻奖励，紫钻是随机产生的。</li>
                <li>每48小时未收取，E钻将停止生长。</li>
                <li>适时推出合伙人机制，持有E钻的用户可定期参与E店平台盈利分红，和E店一起共同成长。</li>
              </div>
              <div className="richplaywhattip">注：E钻总量有限，随着时间的推移，获取难度越来越大，前期入住瑞奇岛将更有优势。</div>
          </div>

          <div className="richplaypower">
              <div className="powerwhattop_left"><img src={require("../../images/decorate3@2x.png")} width="100%" /></div>
              <div className="powerwhattop_middle" ><img src={require("../../images/note2@2x.png")} width="100%" /></div>
              <div className="powerwhattop_right"><img src={require("../../images/decorate4@2x.png")} width="100%" /></div>
          </div>
          <div className="richplaypower_con">
              <div className="richplaypower_con_txt">
                E店依托于区块链加密存储技术为每一个用户提供高度安全的电子商务平台，E店用户在平台内所有的行为数据都可以产生价值并为己所用，实现数据价值最大化。
              </div>
              <div className="richplaypower_ull">
                <li>E钻是岛民通过E店进行各项活动获得活跃度而产生的奖励，可以用于E店内多个项目的消费及兑换，随着瑞奇岛搭建逐渐完善，E钻将发挥愈发重要的作用。</li>
                <li>每日获得E钻的多少取决于动力值，动力值越多，每日获得的E钻就越多。动力值大于40的岛民将有机会获得被称为“紫钻”的额外E钻奖励，紫钻是随机产生的。</li>
                <li>每48小时未收取，E钻将停止生长。</li>
                <li>适时推出合伙人机制，持有E钻的用户可定期参与E店平台盈利分红，和E店一起共同成长。</li>
              </div>

          </div>

          <div className="richplayhow">
              <div className="howwhattop_left"><img src={require("../../images/decorate5@2x.png")} width="100%" /></div>
              <div className="howwhattop_middle" ><img src={require("../../images/note3@2x.png")} width="100%" /></div>
              <div className="howwhattop_right"><img src={require("../../images/decorate6@2x.png")} width="100%" /></div>
          </div>
          <div className="richplayhow_ul">
              <li>E钻是岛民通过E店进行各项活动获得活跃度而产生的奖励，可以用于E店内多个项目的消费及兑换，随着瑞奇岛搭建逐渐完善，E钻将发挥愈发重要的作用。</li>
          </div>

      </div>
    )
  }


})
