import useDocumentTitle from "../hooks/useDocumentTitle.js";

export const Home = () => {

    useDocumentTitle('Coinbase - Buy and Sell Bitcoin, Ethereum, and more with trust');

    return (
        <p className={"text-3xl text-blue-900"}>Welcome to the Homepage</p>
    )
}