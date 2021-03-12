import React, {Component} from 'react';
import './App.css';
import ApiService from './service';
import tracking_link from './sourceImg/tracking_link.png';
import download_icon from './sourceImg/download_icon.png';

export default class App extends Component {
  state = {
    campaigns: []
  }

  componentDidMount(){
    ApiService.handleGetCampaigns()
      .then(res => {
        this.setState({
          campaigns: res
        })
      })
  }

  renderMedias(){
    const {campaigns=[]} = this.state.campaigns

    return(
      <>
        {campaigns.map((campaign) => (
          <ul className="media">
          {campaign.medias.map((media)=> (
            <li>
              <img className="cover_photo" src={media.cover_photo_url} alt="cover_photo" />
              <div className="links">
                <a
                  href={media.tracking_link} 
                  key={media.id}
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank">
                    <img src={tracking_link} alt="tracking_Link" />
                </a>
                <a
                  href={media.download_url}
                  key={media.id}
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank">
                    <img src={download_icon} alt="download_here" />
                </a>   
              </div>           
            </li>
          ))}
          </ul>
        ))}
      </>
    )
  }


  renderCampaigns(){
    const {campaigns=[]} = this.state.campaigns
    console.log("campaigns: ", campaigns)
    console.log(campaigns.medias)

    return(
      <>
      <ul className="campaigns">
          {campaigns.map((campaign) => (
            <li>
              <div className="campaign_name">
                <img className="icon" src={campaign.campaign_icon_url} alt="campaign_icon" />
                <h2 className="name">{campaign.campaign_name}</h2>
                <h3 className="name">{campaign.pay_per_install}</h3>
              </div>
              {this.renderMedias()}
            </li>
          ))}
        </ul>
      </>
    )
  }

  render() {
    return(
      <>
        <h1>This is the Header</h1>
        {this.renderCampaigns()}
      </>
    )
  }
}