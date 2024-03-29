import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { GlobalProvider } from "./context/GlobalContext";
import { BasketProvider } from "./context/BasketContext";
import { BrowserRouter } from "react-router-dom";

const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
};

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalProvider>
                <BasketProvider>
                    <ChakraProvider theme={theme}>
                        <App />
                    </ChakraProvider>
                </BasketProvider>
            </GlobalProvider>
        </BrowserRouter>
    </React.StrictMode>
);
