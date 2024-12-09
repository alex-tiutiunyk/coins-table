
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
      <div className="coins-table">
        <table>
          <tr>
            <tr>
              <th><input type="checkbox" /></th>
              <th className="cell-name">Coin</th>
              <th>% Allocation</th>
            </tr>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>
                  {
                    coin.checked
                      ? <input type="checkbox" checked />
                      : <input type="checkbox" />
                  }
                </td>
                <td class="cell-name">${coin.name}</td>
                <td>
                  <select>
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
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
