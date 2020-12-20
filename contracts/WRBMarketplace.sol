// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.7.0;

contract WRBMarketplace {
    Project[] public deployedProjects;

    function createProject(uint256 minimum) public {
        Project newProject = new Project(minimum, msg.sender);
        deployedProjects.push(newProject);
    }

    function getDeployedProjects() public view returns (Project[] memory) {
        return deployedProjects;
    }
}

contract Project {
    struct Request {
        string description; //uses semicolon rather than , for javascript
        uint256 value;
        address payable recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    } //not an instance of a variable, just a type like address uint etc.

    Request[] public requests;
    address public manager;
    uint256 public fundsRequired;
    mapping(address => bool) public approvers;
    uint256 public approversCount;
    bool public withdrawable;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    modifier funded() {
        require(address(this).balance >= fundsRequired);
        _;
    }

    constructor(uint256 _fundsRequired, address creator) public {
        manager = creator; //to avoid the Marketplace address from becoming manager
        fundsRequired = _fundsRequired;
        withdrawable = false;
    }

    function invest() public payable {
        if (address(this).balance >= fundsRequired) {
            withdrawable = true;
        }
        approvers[msg.sender] = true;
        approversCount++;
    }

    function withdraw() public payable restricted funded {
        msg.sender.transfer(address(this).balance);
    }

    function createRequest(
        string memory description,
        uint256 value,
        address payable recipient
    ) public restricted funded {
        Request memory newRequest = Request({ //memory because its a new instance of Request
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        }); //Request(description, value, recipient, false) is an alternative syntax to create struct but not recommended as it follows the order of keys

        requests.push(newRequest);
    }

    function approveRequest(uint256 index) public funded {
        Request storage request = requests[index]; //storage because we wnat to manipulate the actual struct item in Request.

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]); //require will only exit with falsy value, so flipping with ! is required.

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint256 index) public restricted funded {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            address
        )
    {
        return (
            fundsRequired,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint256) {
        return requests.length;
    }
}
