pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint256 min) public {
        address myCampaign = new Campaign(min, msg.sender);
        deployedCampaigns.push(myCampaign);
    }

    function getDeployedContracts() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }
    Request[] public requests;
    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public voters;
    uint256 public votersCount;

    modifier helper() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint256 min, address creator) public {
        manager = creator;
        minimumContribution = min;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        voters[msg.sender] = true;
        votersCount++;
    }

    function createRequest(
        string description,
        uint256 value,
        address recipient
    ) public helper {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint256 index) public {
        Request storage myRequest = requests[index];
        require(voters[msg.sender]);
        require(!myRequest.approvals[msg.sender]);
        myRequest.approvals[msg.sender] = true;
        myRequest.approvalCount++;
    }

    function finalizeRequest(uint256 index) public helper {
        Request storage myRequest = requests[index];
        require(myRequest.approvalCount > votersCount / 2);
        require(!myRequest.complete);
        myRequest.recipient.transfer(myRequest.value);
        myRequest.complete = true;
    }
}
