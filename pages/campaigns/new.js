import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/layout";
import Head from "next/head";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMsg: "",
    loading: false,
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, errorMsg: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({ from: accounts[0] });
    } catch (err) {
      this.setState({ errorMsg: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form error={Boolean(this.state.errorMsg)} onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Minimun Contribution</label>
            <Input
              label="in wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(e) =>
                this.setState({ minimumContribution: e.target.value })
              }
            />
          </Form.Field>
          <Message
            error
            header="Something went wrong."
            content={this.state.errorMsg}
          />
          <Button loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
