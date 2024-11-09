import { greenfieldTestnet } from '@/utils/chain.utils';
import React from 'react';
import { bsc, mainnet } from 'thirdweb/chains';
import { ConnectButton } from 'thirdweb/react';
import { client } from "@/components/client";

const WalletConnect = () => {
    return (
        <ConnectButton client={client} chains={[bsc, mainnet, greenfieldTestnet]}
        // accountAbstraction={{
        //   chain: bsc,
        //   sponsorGas: false,
        //   overrides: {
        //     bundlerUrl: 'https://bundler.biconomy.io/api/v2/56/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44',

        //   }
        // }} 
        />
    );
};

export default WalletConnect;