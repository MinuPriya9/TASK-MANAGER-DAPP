let WALLET_CONNECTED = "";
let contractAddress = "0xfD286E66CB267e290e22Cf82eD79f6DEb9eCEf20";
let contractAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_desc",
          "type": "string"
        }
      ],
      "name": "addTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllTasks",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "desc",
              "type": "string"
            },
            {
              "internalType": "enum TaskManagementSystem.TaskStatus",
              "name": "status",
              "type": "uint8"
            }
          ],
          "internalType": "struct TaskManagementSystem.Task[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getTask",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "enum TaskManagementSystem.TaskStatus",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTaskCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "markAsFinished",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tasks",
      "outputs": [
        {
          "internalType": "string",
          "name": "desc",
          "type": "string"
        },
        {
          "internalType": "enum TaskManagementSystem.TaskStatus",
          "name": "status",
          "type": "uint8"
        }
      ];