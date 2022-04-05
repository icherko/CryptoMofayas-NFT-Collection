import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/2.png";
import i2 from "./assets/images/logo.png";
import Web3 from "web3";

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #000000;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
  width: 90px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 660px) {
    flex-direction: row;
  }
`;

export const StyledImg = styled.img`
  width: 336px;
  height: 462px;
  @media (min-width: 660px) {
    width: 480px;
    height: 660px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledLogo = styled.img`
  width: 300px;
  height: 213px;
  @media (min-width: 213px) {
    width: 300px;
    height: 213px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Ready to mint.");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  

  const claimNFTs = () => {
    let cost = 90000000000000000;
    if (dateNow > dateMain) {
      cost = 100000000000000000;
    }

    let gasLimit = 80000; //0.0004275
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(30000 * mintAmount + gasLimit);
    let affiliate = getUrlParameter('a');    
    if (Web3.utils.isAddress(affiliate) === false) {
      affiliate = "0xb3f0dfb6816bee8b82cd06d1f7de0f6889f58c72";
    } else {
      totalGasLimit = String(30000 * mintAmount + gasLimit  + 15000);
    }

    setFeedback("Minting your CryptoMofayas...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount, affiliate)
      .send({
        gasLimit: String(totalGasLimit),
        to: "0xE507A115267bE0bd5816Ff0BE1B4B6AA760A0594",
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "WOW, you now own a CryptoMofayas. Go visit Opensea.io to view it."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const useData = React.useRef();

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useData.current = getData;
  var dateMain = new Date(Date.parse("Mar 10 2022 09:00:00 -0800"));
  var datePre = new Date(Date.parse("Mar 09 2022 09:00:00 -0800"));
  var dateNow = new Date();

  useEffect(() => {
    return useData.current();
  }, [blockchain.account]);

  return (
    <s.Screen style={{ backgroundColor: "var(--white)" }}>
      <s.Container flex={1} ai={"center"} style={{ padding: 24 }}>
        <ResponsiveWrapper flex={1} style={{ padding: 24 }}>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={i1} />
          </s.Container>
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{ backgroundColor: "--black", padding: 24 }}
          >
        <s.TextTitle
          style={{ textAlign: "center", fontSize: 1, fontWeight: "bold" }}
        >
          <a
                    target={"_self"}
                    href={"https://www.cryptomofayas.com/"}
                    rel="noreferrer"
                  >
                    <StyledLogo alt={"example"} src={i2} />
                  </a>
                  <s.SpacerLarge />
        </s.TextTitle>
            {Number(data.totalSupply) === 1999 ? (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  The sale has ended.
                </s.TextTitle>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  You can still find CryptoMofayas for sale on {" "}
                  <a
                    target={"_blank"}
                    href={"https://www.opensea.io/"}
                    rel="noreferrer"
                  >
                    Opensea.io
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
                <s.TextTitle style={{ textAlign: "left" , fontSize: 45}}>
                Mint CryptoMofayas NFTs
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription style={{ textAlign: "left" , fontSize: 20}}>
                {dateNow < dateMain ? (
                <>
                0.09 Eth Presale March 9th 9AM PST until March 10th 9AM
                </>
                ) : (
                  <>
                  0.1 Eth Main Sale
                  </>  
                )}
                </s.TextDescription>
                <s.SpacerXSmall />
                <s.TextDescription style={{ textAlign: "left" , fontSize: 12}}>
                Limit 20 per wallet
                </s.TextDescription>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  {feedback}
                </s.TextDescription>
                <s.SpacerMedium />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription style={{ textAlign: "center" }}>
                      Connect to the Ethereum network
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    > 
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription style={{ textAlign: "center" }}>
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>

                    {dateNow > datePre ? (
                    <>
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(mintAmount);
                        getData();
                      }}
                    >
                      {claimingNft ? "BUSY" : "BUY "}
                    </StyledButton>
                    </>
                    ) : null}
                    <s.SpacerSmall />
                    <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                  </s.Container>
                )}
              </>
            )}
        <s.SpacerLarge />
        <s.SpacerLarge />
        <s.SpacerLarge />
        <s.SpacerLarge />
          </s.Container>
        </ResponsiveWrapper>
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription style={{ textAlign: "center", fontSize: 18 }}>
            If you have any questions the please ask in our support channel of our {" "}
                  <a
                    target={"_blank"}
                    href={"https://discord.gg/wCqZwjdpPx"}
                    rel="noreferrer"
                  >
                    Discord
                  </a>{" "}
                  The contract address is {" "}
                  <a
                    target={"_blank"}
                    href={"https://etherscan.io/address/0xe507a115267be0bd5816ff0be1b4b6aa760a0594#code"}
                    rel="noreferrer"
                  >                  
                  0xE507A115267bE0bd5816Ff0BE1B4B6AA760A0594
                  </a>
          </s.TextDescription>
        </s.Container>
      </s.Container>
    </s.Screen>
  );
}

export default App;
