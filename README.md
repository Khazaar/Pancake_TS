
## Project instructions
0. Run node and deploy
hh node
1. Fund users
hh run scripts/fund-users.ts --network localhost
2. Check DEX status
hh run scripts/dex-status.ts --network localhost
3. Create pairs (non nececery)
hh run scripts/create-pairs.ts --network localhost
4. Add Liquidity
hh run scripts/add-liquidityUNV.ts --network localhost
5. Swap
hh run scripts/swapUNV.ts --network localhost
6. Call oracle
hh run scripts/oracle.ts --network localhost
7. Withdraw fees
hh run scripts/withdrawFees.ts --network localhost
8. Manage admin
hh run scripts/manage-admin.ts --network localhost

## TASKS ##
hh testDEX --network localhost

Functions removed:
addLiquidityETH
removeLiquidityETHWithPermit
removeLiquidityETH
removeLiquidityETHSupportingFeeOnTransferTokens
swapExactETHForTokens
swapTokensForExactETH
removeLiquidityETHWithPermitSupportingFeeOnTransferTokens
swapTokensForExactETH
swapExactTokensForETH
swapETHForExactTokens
swapExactETHForTokensSupportingFeeOnTransferTokens
swapExactTokensForETHSupportingFeeOnTransferTokens




https://github.com/wighawag/hardhat-deploy-test-uniswap/tree/main/deploy

await hre.network.provider.send("debug_traceTransaction",["0x48c03b9c304f5e99e5bb18c4a7020c1f6b9f8e8d313daf1c9fec42ba71e33930",])

debug_traceBlockByNumber

{"method": "debug_traceBlockByNumber", "params": [number, {}]}


address: "0xF8E133c6B4bC73d89723B138E0654AeaAD11Bd21",
contract: "contracts/ERC20Apple.sol:ERC20Apple",

address: "0x4075B23f1D93e99439eC078BB3E59712FE19B53A",
contract: "contracts/ERC20LSR.sol:ERC20LSR",

address: "0xac3849A6d4b0a97eC86998F6e0cC531D66F5Fa82",
contract: "contracts/ERC20Pancake.sol:ERC20Pancake",

address: "0xfA85901DBeB559EBA2d15bdc1c9EdfC14D880cAC",
contract: "contracts/ERC20Potato.sol:ERC20Potato",

address: "0xf1f8c1B19e56f34220B2eef5B19a15c2DF504f5F",
contract: "contracts/PancakeFactory.sol:PancakeFactory",

address: "0xEaa96e643d817D7DE691D8992d7535aaD458c6DD",
contract: "contracts/PancakePair.sol:PancakePair",

address: "0xB767f6d00424BDC3d148ad8ec7A882ef4BcEC1d3",
contract: "contracts/PancakeRouter_mod.sol:PancakeRouter_mod",
