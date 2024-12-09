
const App = () => {
  const coins = [
    {
      id: 1,
      name: "ETH",
      checked: true,
      allocation: ''
    },
    {
      id: 2,
      name: "BONK",
      checked: false,
      allocation: ''
    },
    {
      id: 3,
      name: "BTC",
      checked: true,
      allocation: ''
    },
    {
      id: 4,
      name: "DOGE",
      checked: false,
      allocation: ''
    },
    {
      id: 5,
      name: "DOGS",
      checked: false,
      allocation: ''
    },
    {
      id: 6,
      name: "FLOKI",
      checked: false,
      allocation: ''
    },
    {
      id: 7,
      name: "POPCAT",
      checked: false,
      allocation: ''
    },
    {
      id: 8,
      name: "SHIBA",
      checked: false,
      allocation: ''
    },
  ]
  return (
    <>
      <div className="px-[20px]">
        <div className="mt-[40px] max-w-[600px] mx-auto bg-gray-100 pt-[15px] px-[20px] pb-[20px] rounded-lg flex flex-col gap-y-[25px]">
          <img src="https://crypto-fund.zojax.com/logo.png" alt="" width="150" />
          <div className="border rounded-lg border-gray-400">
            <table className="w-full text-base">
              <tr>
                <th className="text-center p-[5px]"><input type="checkbox" /></th>
                <th className="text-left p-[5px]">Coin</th>
                <th className="text-center p-[5px]">% Allocation</th>
              </tr>
              {coins.map((coin) => (
                <tr key={coin.id}>
                  <td className="text-center border-t p-[3px] border-gray-400">
                    {
                      coin.checked
                        ? <input type="checkbox" checked />
                        : <input type="checkbox" />
                    }
                  </td>
                  <td className="border-t py-[3px] border-gray-400">${coin.name}</td>
                  <td className="text-center border-t py-[3px] border-gray-400">
                    <select className="border rounded-lg w-[60px] px-[5px] py-[3px] text-center">
                      <option>5</option>
                      <option>10</option>
                      <option>15</option>
                      <option>20</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <footer className="flex flex-wrap md:flex-nowrap gap-[15px]">
            <button type="button" className="w-full md:w-3/12 bg-white border-y-[3px] border-x-[3px] border-blue-600 rounded-lg font-bold text-lg p-[7px]">Enable</button>
            <button type="button" className="w-full md:w-3/12 bg-white border-y-[3px] border-x-[3px] border-blue-600 rounded-lg font-bold text-lg p-[7px]">Start Bot</button>
            <button type="button" className="w-full md:w-3/12 bg-white border-y-[3px] border-x-[3px] border-blue-600 rounded-lg font-bold text-lg p-[7px]">Stop Bot</button>
            <button type="button" className="w-full md:w-3/12 bg-white border-y-[3px] border-x-[3px] border-blue-600 rounded-lg font-bold text-lg p-[7px]">Reset</button>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
