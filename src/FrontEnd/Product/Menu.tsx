import React from 'react'
import { useAppSelector, useAppDispatch } from '../../App/hooks'
import { Button, ButtonToolbar, FlexboxGrid, Grid } from 'rsuite'

const Menu = () => {

    const products = useAppSelector((state) => state.products)

    const onClear = () => {
        console.log('clear')
    }

    const onCreateOrder = () => {
        console.log('clear')
    }
    return (
        <Grid>
            <FlexboxGrid>
                {products && products.map((product, index) => {
                    <div>
                        
                    </div>
                })}
            </FlexboxGrid>
            <FlexboxGrid justify="end" style={{ marginTop: 20 }}>
                <ButtonToolbar>
                    <Button color="orange" appearance="primary" onClick={onClear}>Clear</Button>
                    <Button color="orange" appearance="primary" onClick={onCreateOrder}>Create Order</Button>
                </ButtonToolbar>
            </FlexboxGrid>
        </Grid>
    )
}

export { Menu } 