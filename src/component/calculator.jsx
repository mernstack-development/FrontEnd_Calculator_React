import React, { useState } from "react";

const Calculator = () => {
    const [val, setVal] = useState("")

    const backspace = () => {
        try{
            setVal(val.slice(0,-1))
        }catch (error){
            setVal("")
        }
    }

    const calculate = () => {
        try{
            setVal(eval(val));
        }catch (error){
            setVal("Error");
        }
    }


    return (
        <div>
            <div className="container my-2">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-5 fw-bolder text-center text-primary">Calculator</h1>
                        <hr />
                    </div>
                    <div className="row calculator">
                        <div className="col-md-4">
                            <div className="card mb-3 pt-3 shadow">
                                <div className="card-body text-primary">
                                    <input type="text" value = { val } onChange = {(e => setVal(e.target.value) )} className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow "/>
                                    <div className="row mt-2">
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow" value = "1" onClick={(e) => setVal(val + e.target.value)}>1</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "2" onClick={(e) => setVal(val + e.target.value)}>2</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "3" onClick={(e) => setVal(val + e.target.value)}>3</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow text-warning " value = "C" onClick={() => backspace()}>C/CE</button>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "4" onClick={(e) => setVal(val + e.target.value)}>4</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "5" onClick={(e) => setVal(val + e.target.value)}>5</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "6" onClick={(e) => setVal(val + e.target.value)}>6</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow text-info " value = "+" onClick={(e) => setVal(val + e.target.value)}>+</button>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "7" onClick={(e) => setVal(val + e.target.value)}>7</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "8" onClick={(e) => setVal(val + e.target.value)}>8</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "9" onClick={(e) => setVal(val + e.target.value)}>9</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow text-info" value = "*" onClick={(e) => setVal(val + e.target.value)}>x</button>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "." onClick={(e) => setVal(val + e.target.value)}>.</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "0" onClick={(e) => setVal(val + e.target.value)}>0</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow " value = "00" onClick={(e) => setVal(val + e.target.value)}>00</button>
                                        </div>

                                        <div className="col-3">
                                            <button className="btn btn-light text-primary shadow text-info" value = "/" onClick={(e) => setVal(val + e.target.value)}>/</button>
                                        </div>
                                    </div>

                                    <div className="md-12 mt-2">
                                        <div className="col-12 ">
                                            <button className="larger btn btn-light text-primary shadow " value = "=" onClick={() => calculate()}>=</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;