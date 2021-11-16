import React, { useEffect } from 'react';
import { ChainId, ETH, } from 'uniswap-dapp-integration-shared';
import UniswapReact from 'uniswap-react';
import './style.css';

function Uniswap() {
    const [uniswapDappSharedLogicContext, setUniswapDappSharedLogicContext] = React.useState(undefined);
    useEffect(() => {
        (async () => {
            // MetaMask example
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            // basic config!
            const uniswapDappSharedLogicContext = {
                supportedNetworkTokens: [
                    {
                        chainId: ChainId.MAINNET,
                        defaultInputToken: ETH.MAINNET().contractAddress,
                        defaultOutputToken: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
                        supportedTokens: [
                            { contractAddress: ETH.MAINNET().contractAddress },
                            { contractAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984' },
                            { contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7' },
                            { contractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862' },
                            { contractAddress: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9' },
                            { contractAddress: '0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F' },
                        ],
                    },
                    {
                        chainId: ChainId.RINKEBY,
                        defaultInputToken: ETH.RINKEBY().contractAddress,
                        defaultOutputToken: '0xef0e839cf88e47be676e72d5a9cb6ced99fad1cf',
                        supportedTokens: [
                            { contractAddress: ETH.RINKEBY().contractAddress },
                            { contractAddress: '0xef0e839cf88e47be676e72d5a9cb6ced99fad1cf' },
                        ],
                    },
                ],
                ethereumAddress: accounts[0],
                ethereumProvider: window.ethereum,
            };
            setUniswapDappSharedLogicContext(uniswapDappSharedLogicContext);
        })();
    }, []);
    return (React.createElement("div", { className: "App" }, uniswapDappSharedLogicContext !== undefined && (React.createElement(UniswapReact, { uniswapDappSharedLogicContext: uniswapDappSharedLogicContext }))));
}
export default Uniswap;