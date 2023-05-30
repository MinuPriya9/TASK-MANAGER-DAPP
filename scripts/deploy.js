async function main() {
  const TaskManagementSystem = await ethers.getContractFactory("TaskManagementSystem");

  // Start deployment, returning a promise that resolves to a contract object
  const TaskManagementSystem_ = await TaskManagementSystem.deploy();
  console.log("Contract address:", TaskManagementSystem_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });