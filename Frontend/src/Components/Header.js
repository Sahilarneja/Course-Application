import React from "react";
import {Card, CardBody } from "reactstrap";

function Header({name,title}){
    return(
        <>
        <Card className="my-2 bg-info">
            <CardBody>
            <h1 className="text-center my-3">Welcome to Courses Application</h1>

            </CardBody>
        </Card>
        </>
    );
}
export default Header;