import { client } from "@/components/client";
import { greenFieldClient, selectSp } from "@/config/greenfield.config";
import { getOffchainAuthKeys } from "@/utils/greenfield.utils";
import { Long, OnProgressEvent, VisibilityType } from "@bnb-chain/greenfield-js-sdk";
import { ethers } from "ethers";
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import { bsc } from "thirdweb/chains";

export const handleCreateGreenFieldBucket = async ({
    address,
    bucketName,
    activeAccount,
}: {
    address: string
    bucketName: string
    activeAccount: any
}) => {
    const spInfo = await selectSp();
    console.log('spInfo', spInfo);

    const ethersSigner = await ethers6Adapter.signer.toEthers({
        client,
        chain: bsc,
        account: activeAccount,
    });

    const ethersprovider = await ethers6Adapter.provider.toEthers({
        chain: bsc,
        client: client
    })
    // const provider = new ethers.BrowserProvider(window.ethereum)
    // const signer = await provider.getSigner();
    console.log("Provider rpc", ethersprovider);
    // const offChainData = await getOffchainAuthKeys(address, ethersprovider);
    // if (!offChainData) {
    //     alert('No offchain, please create offchain pairs first');
    //     return;
    // }

    try {
        const createBucketTx = await greenFieldClient.bucket.createBucket(
            {
                bucketName: bucketName,
                creator: address,
                primarySpAddress: spInfo.primarySpAddress,
                visibility: VisibilityType.VISIBILITY_TYPE_PUBLIC_READ,
                chargedReadQuota: Long.fromString('0'),
                paymentAddress: address,
            },
        );

        const simulateInfo = await createBucketTx.simulate({
            denom: 'BNB',
        });

        console.log('simulateInfo', simulateInfo);

        const res = await createBucketTx.broadcast({
            denom: 'BNB',
            gasLimit: Number(simulateInfo?.gasLimit),
            gasPrice: simulateInfo?.gasPrice || '5000000000',
            payer: address,
            granter: '',
        });

        if (res.code === 0) {
            alert('success');
            return res
        }
    } catch (err) {
        console.log(typeof err)
        if (err instanceof Error) {
            alert(err.message);
        }
        if (err && typeof err === 'object') {
            alert(JSON.stringify(err))
        }
    }
}


export const handleCreateGreenFieldObject = async ({
    address,
    jsonFile,
    bucketName,
    strategyName,
}: {
    address: string
    jsonFile: File,
    bucketName: string,
    strategyName: string

}) => {
    if (!address) return;

    console.log("File >>>", jsonFile);

    const spInfo = await selectSp();
    console.log('spInfo', spInfo);

    const provider = new ethers.BrowserProvider(window.ethereum)
    const offChainData = await getOffchainAuthKeys(address, provider);
    if (!offChainData) {
        alert('No offchain, please create offchain pairs first');
        return;
    }

    try {
        const res = await greenFieldClient.object.delegateUploadObject({
            bucketName: bucketName,
            objectName: strategyName,
            body: jsonFile,
            delegatedOpts: {
                visibility: VisibilityType.VISIBILITY_TYPE_PUBLIC_READ,
            },
            onProgress: (e: OnProgressEvent) => {
                console.log('progress: ', e.percent);
            },
        }, {
            type: 'EDDSA',
            address: address,
            domain: window.location.origin,
            seed: offChainData.seedString,
        })

        if (res.code === 0) {
            alert('create object success');
            return res;
        }
    } catch (err) {
        console.log(typeof err)
        if (err instanceof Error) {
            alert(err.message);
        }
        if (err && typeof err === 'object') {
            alert(JSON.stringify(err))
        }
    }
}


export const checkIfBucketExists = async ({
    bucketName
}: {
    bucketName: string
}) => {
    try {
        const bucketInfo = await greenFieldClient.bucket.getBucketMeta({
            bucketName: bucketName,
        });
        console.log("Bucket Info: ", bucketInfo);
        return true
    } catch (error) {
        console.log("Error", error);
        return false
    }

}