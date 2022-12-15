import React from 'react'
import CoinRows from './CoinRows'

function TableCoins({coins,search}) {
    const filteredCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
    })
    const titles = ['#','Coin','Price','Price Change','24h Volume']
    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {titles.map((title,index)=>(
                        <td key={index}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin,index)=>(
                    <CoinRows coin={coin} key={index} index={index + 1}/>  
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins
