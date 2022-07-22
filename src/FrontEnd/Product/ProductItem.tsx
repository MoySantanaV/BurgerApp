import React, { useState } from 'react'
import { Panel, Grid, FlexboxGrid, Button, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'

const ProductItem = ({ product }:any) => {

    const{name, price} = product;
    
    
    const [counter , SetCounter] = useState<number>(0)

    function onCountingPlus():void{

        SetCounter(counter+ 1)
    }

    function onCountingMinus():void{
        counter <= 0 ? SetCounter(0) : SetCounter(counter- 1)
        
    }

    return (

                <Panel shaded bordered bodyFill style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginLeft: 20 , display: 'flex', width: 220, height: 220 }}>
                    <Panel header={`${name}`}>
                        <p>{`$ ${price}`}</p>
                    </Panel>
                    <ButtonToolbar>
                        <Button appearance='subtle' disabled={counter<=0 ? true : false} onClick={onCountingMinus}>-</Button>
                        <small> {counter} </small>
                        <Button appearance='subtle' onClick={onCountingPlus}>+</Button>
                    </ButtonToolbar>
                </Panel>

    )
}

export  {ProductItem}