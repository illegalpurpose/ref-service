import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <div
            style={{
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Helmet>
                <title>REF Service 404</title>
            </Helmet>
            <h1 style={{ fontSize: "100px", fontWeight: "700" }}>404</h1>
        </div>
    );
};

export default NotFound;
