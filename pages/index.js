import React, { Component } from "react";
import factory from "../ethereum/factory";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Input } from "semantic-ui-react";
import Layout from "../components/layout";

const items = [
  {
    header: "",
    description: "",
  },
];

class CampaignsDisplay extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedContracts().call();
    return { campaigns: campaigns };
  }

  displayCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Button
            floated="right"
            content="Create Campaign"
            icon="add circle"
            primary
          />
          {this.displayCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignsDisplay;
